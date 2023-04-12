import type { V2_MetaFunction } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import { getArtists } from 'db/get-artists.server';
import styles from '../styles/main.css';

function slugify(str: string) {
	return str.trim().replace(/\W+/g, '-').replace(/^-|-$/g, '');
}

export async function loader({ params }: { params: { genre: string } }) {
	const artists = await getArtists({ genres: [params.genre] });

	return artists;
}

export const meta: V2_MetaFunction = () => {
	return [
		{ title: 'Music Picker · Tigris Data + Remix' },
		{ tagName: 'link', rel: 'stylesheet', href: styles },
	];
};

export default function Index() {
	const { genres, artists } = useLoaderData();

	return (
		<>
			<h1>Musical Artists</h1>
			{genres.length > 0 ? (
				<nav className="genre-filters">
					<a href="/">show all</a>
					{genres.map((genre: any) => {
						return (
							<a key={genre.value} href={`/genre/${slugify(genre.value)}`}>
								{genre.value} ({genre.count})
							</a>
						);
					})}
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
