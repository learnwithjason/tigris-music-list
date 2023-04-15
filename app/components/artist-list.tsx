import type { loader } from '~/routes/genre.$genre';
import { useLoaderData } from '@remix-run/react';

export const ArtistList = () => {
	const { artists } = useLoaderData<typeof loader>();

	return (
		<div className="wrapper">
			{artists.map((artist) => {
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
	);
};
