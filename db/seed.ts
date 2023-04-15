import { z } from 'zod';
import { Tigris } from '@tigrisdata/core';
import artists from './data/artists.json';
import type { Artist } from './models/artists';

const tigrisClient = new Tigris();
const db = tigrisClient.getDatabase();
const collection = db.getCollection<Artist>('artists');

const ArtistSchema = z.object({
	id: z.string(),
	name: z.string(),
	url: z.string().url(),
	genres: z.array(z.string()),
	images: z.array(
		z.object({
			url: z.string().url(),
			height: z.number(),
			width: z.number(),
		}),
	),
});

async function insertArtists() {
	const parsed: Array<Artist> = artists.map((artist) => {
		return ArtistSchema.parse({
			id: artist.id,
			name: artist.name,
			url: artist.external_urls.spotify,
			genres: artist.genres,
			images: artist.images,
		});
	});

	const inserted = await collection.insertMany(parsed);

	console.log(inserted);
}

insertArtists();
