import type { V2_MetaFunction } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import { getArtists } from 'db/get-artists.server';
import styles from '../styles/main.css';
import { useState } from 'react';

function slugify(str: string) {
	return str;
	// return str.trim().replace(/\W+/g, '-').replace(/^-|-$/g, '');
}

export async function loader() {
	const artists = await getArtists();

	return artists;
}

export const meta: V2_MetaFunction = ({ params }) => {
	return [
		{ title: `Genre: ${params.genre} · Tigris Data + Remix` },
		{ tagName: 'link', rel: 'stylesheet', href: styles },
	];
};

export default function Index() {
	const [expanded, setExpanded] = useState(false);
	const { genres, artists } = useLoaderData();

	const genreFilters = expanded ? genres : genres.slice(0, 10);

	return (
		<>
			<h1>Musical Artists</h1>
			{genreFilters.length > 0 ? (
				<nav className="genre-filters">
					{genreFilters.map((genre: any) => {
						return (
							<a key={genre.value} href={`/genre/${slugify(genre.value)}`}>
								{genre.value} ({genre.count})
							</a>
						);
					})}
					{expanded ? (
						<button onClick={() => setExpanded(false)}>
							show fewer genres
						</button>
					) : (
						<button onClick={() => setExpanded(true)}>show all genres</button>
					)}
				</nav>
			) : null}
			<div className="wrapper">
				{artists.map((artist: any) => {
					return (
						<div className="artist" key={artist.document.id}>
							<img
								src={artist.document.images[1].url}
								alt={artist.document.name}
							/>
							<div className="details">
								<h2>{artist.document.name}</h2>
								<p>
									<a href={artist.document.url}>view on Spotify</a>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
