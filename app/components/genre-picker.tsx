import { Link } from '@remix-run/react';

export const GenrePicker = ({
	expandable = false,
	clearable = false,
}: {
	expandable?: boolean;
	clearable?: boolean;
}) => {
	// TODO preserve search query while navigating genres

	// TODO get current genre from URL params
	const selectedGenre = undefined;

	// TODO get genre data from Tigris
	const visibleGenres = [
		{
			value: 'hip hop',
			count: 2,
		},
		{
			value: 'indie rock',
			count: 1,
		},
	];

	return (
		<nav className="genre-filters">
			{/* TODO add support for clearing selected genre */}

			{visibleGenres.map((genre: any) => {
				return (
					<Link
						key={genre.value}
						to={`/genre/${genre.value}`}
						className={
							genre.value === selectedGenre
								? 'genre-filter selected'
								: 'genre-filter'
						}
						prefetch="intent"
					>
						<span className="genre-label" title={genre.value}>
							{genre.value}
						</span>{' '}
						({genre.count})
					</Link>
				);
			})}

			{/* TODO add support for expanding / collapsing genre list when it’s long */}
		</nav>
	);
};
