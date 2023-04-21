import { Link, useLocation } from '@remix-run/react';

export const Search = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const q = params.get('q') || '';

	return (
		<div className="search">
			<form method="GET">
				<label htmlFor="keyword-search">Search artists by name or genre:</label>
				<input type="text" name="q" id="keyword-search" defaultValue={q} />

				<button type="submit">Search</button>
			</form>

			{q.length > 1 ? (
				<div className="search-details">
					<span>Artists with name or genre matching “{q}”</span>
					<Link to={location.pathname} prefetch="intent">
						&times; clear search
					</Link>
				</div>
			) : null}
		</div>
	);
};
