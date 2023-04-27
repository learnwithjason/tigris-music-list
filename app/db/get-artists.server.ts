import type { SearchQuery } from '@tigrisdata/core/dist/search';
import type { Artist } from '~/db/models/artists';

import { Tigris } from '@tigrisdata/core';

type GetArtistsArgs = { genres?: string[]; q?: string };

export async function getArtists(
	{ genres, q }: GetArtistsArgs = { genres: [], q: '' }
) {
	const client = new Tigris();
	const db = client.getDatabase();
	const artists = db.getCollection<Artist>('artists');

	const query: SearchQuery<Artist> = {
		q,
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

		// in longer lists, only show genres referring to 2+ artists to save space
		let genres = arr[0].facets.genres.counts;
		if (genres.length > 50) {
			genres = genres.filter((g) => g.count > 1);
		}

		return {
			genres,
			artists: arr[0].hits,
		};
	} catch (err) {
		console.error(err);

		return { genres: [], artists: [] };
	}
}
