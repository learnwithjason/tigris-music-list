import { Tigris } from '@tigrisdata/core';
import type { SearchQuery } from '@tigrisdata/core/dist/search';
import type { Artist } from './models/artists';

type GetArtistsArgs = { genres?: string[] };

export async function getArtists({ genres }: GetArtistsArgs = { genres: [] }) {
	const client = new Tigris();
	const db = client.getDatabase();
	const artists = db.getCollection<Artist>('artists');

	const query: SearchQuery<Artist> = {
		hitsPerPage: 100,
		searchFields: ['name', 'genres'],
		filter: {
			genres,
		},
		sort: { field: 'name', order: '$asc' },
		facets: {
			genres: {
				size: 100,
			},
		},
	};

	try {
		const results = await artists.search(query);
		const arr = await results.toArray();

		return {
			genres: arr[0].facets.genres.counts.filter((g) => g.count > 1),
			artists: arr[0].hits,
		};
	} catch (err) {
		console.error(err);

		return { genres: [], artists: [] };
	}
}
