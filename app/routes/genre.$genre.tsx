import type { V2_MetaFunction } from '@remix-run/react';
import type { loader } from './_index';
import { useParams } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import styles from '../styles/main.css';
import { GenrePicker } from '~/components/genre-picker';
import { ArtistList } from '~/components/artist-list';
import { Layout } from '~/components/layout';

export const meta: V2_MetaFunction = ({ params }) => {
	return [
		{ title: `Genre: ${params.genre} · Tigris Data + Remix` },
		{ tagName: 'link', rel: 'stylesheet', href: styles },
	];
};

export { loader } from './_index';

export default function Index() {
	const { genre } = useParams();
	const data = useLoaderData<typeof loader>();

	return (
		<Layout title={`Genre: ${genre}`}>
			<GenrePicker genres={data.genres} clearable={true} />

			<ArtistList />
		</Layout>
	);
}
