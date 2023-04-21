import type { LoaderArgs } from '@remix-run/node';

import { useParams } from '@remix-run/react';
import { getArtists } from 'db/get-artists.server';
import { getGenreFromParams } from '~/utils';
import { GenrePicker } from '~/components/genre-picker';
import { ArtistList } from '~/components/artist-list';
import { Search } from '~/components/search';

export async function loader({ request, params }: LoaderArgs) {
	const url = new URL(request.url);
	const q = url.searchParams.get('q') || undefined;
	const genre = getGenreFromParams(params);
	const genres = genre ? [genre] : undefined;
	const data = await getArtists({ genres, q });

	return data;
}

export default function Index() {
	const params = useParams();
	const genre = getGenreFromParams(params);

	return (
		<>
			<Search />
			<GenrePicker
				expandable={typeof genre === 'undefined'}
				clearable={typeof genre !== 'undefined'}
			/>

			<ArtistList />
		</>
	);
}
