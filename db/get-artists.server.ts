import { Tigris } from '@tigrisdata/core';
import type { SearchQuery } from '@tigrisdata/core/dist/search';
import type { Artist } from './models/artists';

export async function getArtists() {
	const client = new Tigris();
	const db = client.getDatabase();
	const artists = db.getCollection<Artist>('artists');

	const query: SearchQuery<Artist> = {
		q: 'hip hop',
		searchFields: ['name', 'genres'],
		facets: ['genres'],
	};

	const results = await artists.search(query);

	for await (const result of results) {
		console.log(JSON.stringify(result, null, 2));
	}

	return results;
}
