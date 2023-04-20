import { useSearchParams } from '@remix-run/react';
import { useState } from 'react';

export const SearchInput = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState<string>(searchParams.get('q') || '');

  return (
    <div className="search">
      <form method="GET">
        <input
          name="q"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button
          onClick={() => {
            setQuery('');
          }}
        >
          Clear
        </button>
      </form>
    </div>
  );
};
