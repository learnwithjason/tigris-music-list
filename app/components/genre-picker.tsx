import { Link, useLocation } from '@remix-run/react';
import { useState } from 'react';

export const GenrePicker = () => {
	const location = useLocation();
	const [expanded, setExpanded] = useState(false);
	// TODO get current genre from URL params
	const selectedGenre = undefined;
	const genres = [
		{
			value: 'hip hop',
			count: 2,
		},
		{
			value: 'indie rock',
			count: 1,
		},
	];

	const visibleGenres =
		genres.length > 10 && !expanded ? genres.slice(0, 10) : genres;

	let expanderButton = null;

	if (genres.length > 10) {
		expanderButton = expanded ? (
			<button onClick={() => setExpanded(false)} className="control">
				show fewer genres
			</button>
		) : (
			<button onClick={() => setExpanded(true)} className="control">
				show all genres
			</button>
		);
	}

	return (
		<nav className="genre-filters">
			{selectedGenre ? (
				<Link to={`/${location.search}`} className="control" prefetch="intent">
					&times; clear filters
				</Link>
			) : null}

			{visibleGenres.map((genre: any) => {
				return (
					<Link
						key={genre.value}
						to={`/genre/${genre.value}${location.search}`}
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

			{expanderButton}
		</nav>
	);
};
