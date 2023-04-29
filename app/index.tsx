import { GenrePicker } from '~/components/genre-picker';
import { ArtistList } from '~/components/artist-list';
import { Search } from '~/components/search';

// TODO export a loader that returns all artist and genre data

export default function Index() {
	return (
		<>
			<Search />
			<GenrePicker />
			<ArtistList />
		</>
	);
}
