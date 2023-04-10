import type { V2_MetaFunction } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import { getArtists } from 'db/get-artists.server';

export async function loader() {
	const artists = await getArtists();

	return artists;
}

export const meta: V2_MetaFunction = () => {
	return [{ title: 'New Remix App' }];
};

export default function Index() {
	const data = useLoaderData();

	return (
		<>
			<h1>Musical Artists</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</>
	);
}
