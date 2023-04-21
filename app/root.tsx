import type { V2_MetaFunction } from '@remix-run/react';

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useParams,
} from '@remix-run/react';
import { getGenreFromParams } from '~/utils';
import styles from '~/styles/main.css';

export const meta: V2_MetaFunction = ({ params }) => {
	const genre = getGenreFromParams(params);

	const title = genre
		? `Genre: ${genre} · Tigris Data + Remix`
		: 'Music Picker · Tigris Data + Remix';

	return [{ title }, { tagName: 'link', rel: 'stylesheet', href: styles }];
};

export default function Root() {
	const params = useParams();
	const genre = getGenreFromParams(params);

	const title = genre ? `Genre: ${genre}` : 'Music Picker';

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<header>
					<span className="logo" role="img" aria-label="music notes">
						🎶
					</span>
					<div className="masthead">
						<h1>{title}</h1>
						<p>
							Take a look through this list and you might just find your new
							favorite artist.
						</p>
					</div>
				</header>

				<main>
					<Outlet />
				</main>

				<footer>
					<a href="https://jason.af/links">made by Jason Lengstorf</a>
					<a href="https://lwj.dev/tigris-data">powered by Tigris Data</a>
					<a href="https://github.com/learnwithjason/tigris-music-list">
						source code
					</a>
				</footer>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
