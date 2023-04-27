import type { loader } from '~/index';

import { Link, useLoaderData, useLocation, useParams } from '@remix-run/react';
import { useState } from 'react';
import { getGenreFromParams } from '~/utils';

export const GenrePicker = ({
	expandable = false,
	clearable = false,
}: {
	expandable?: boolean;
	clearable?: boolean;
}) => {
	const location = useLocation();
	const { genres } = useLoaderData<typeof loader>();
	const params = useParams();
	const selectedGenre = getGenreFromParams(params);
	const [expanded, setExpanded] = useState(false);

	const visibleGenres = expandable && expanded ? genres : genres.slice(0, 10);

	let expanderButton = null;

	if (expandable && genres.length > 10) {
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
			{clearable ? (
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
