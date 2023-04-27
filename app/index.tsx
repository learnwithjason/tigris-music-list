import { GenrePicker } from '~/components/genre-picker';
import { ArtistList } from '~/components/artist-list';
import { Search } from '~/components/search';

// TODO export a loader that returns all artist and genre data

export default function Index() {
	const genre = undefined;

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
