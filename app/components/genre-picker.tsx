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
				<a href="/" className="control">
					&times; clear filters
				</a>
			) : null}

			{visibleGenres.map((genre: any) => {
				return (
					<a key={genre.value} href={`/genre/${genre.value}`}>
						{genre.value} ({genre.count})
					</a>
				);
			})}

			{expanderButton}
		</nav>
	);
};
