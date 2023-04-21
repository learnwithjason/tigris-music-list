import type { loader } from '~/routes/_index';

import { useLoaderData } from '@remix-run/react';

export const ArtistList = () => {
	const { artists } = useLoaderData<typeof loader>();

	if (artists.length < 1) {
		return (
			<div className="artist-list empty">
				<p>no artists match the current filters</p>
			</div>
		);
	}

	return (
		<div className="artist-list">
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
