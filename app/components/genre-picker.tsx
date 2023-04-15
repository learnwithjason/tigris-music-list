import { Link } from '@remix-run/react';
import { useState } from 'react';

export const GenrePicker = ({
	genres,
	expandable = false,
	clearable = false,
}: {
	genres: { value: string; count: number }[];
	expandable?: boolean;
	clearable?: boolean;
}) => {
	const [expanded, setExpanded] = useState(false);

	if (genres.length < 1) {
		return null;
	}

	const visibleGenres = expanded ? genres : genres.slice(0, 10);

	let expanderButton = null;

	if (expandable) {
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
				<Link to="/" className="control" prefetch="intent">
					&times; clear filters
				</Link>
			) : null}

			{visibleGenres.map((genre: any) => {
				return (
					<Link
						key={genre.value}
						to={`/genre/${genre.value}`}
						prefetch="intent"
					>
						{genre.value} ({genre.count})
					</Link>
				);
			})}

			{expanderButton}
		</nav>
	);
};
