import type { Params } from '@remix-run/react';

export function getGenreFromParams(params: Params): string | undefined {
	const [, genre] = params['*'] ? params['*'].split('/') : [];

	return genre;
}
