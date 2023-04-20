import type { V2_MetaFunction } from '@remix-run/react';
import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getArtists } from 'db/get-artists.server';
import { GenrePicker } from '~/components/genre-picker';
import { ArtistList } from '~/components/artist-list';
import { Layout } from '~/components/layout';
import styles from '../styles/main.css';
import { SearchInput } from '~/components/search-input';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Music Picker · Tigris Data + Remix' },
    { tagName: 'link', rel: 'stylesheet', href: styles },
  ];
};

export async function loader({ request, params }: LoaderArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') || undefined;
  const genres = params.genre ? [params.genre] : undefined;
  const data = await getArtists({ genres, q });

  return data;
}

export default function Index() {
  const { genres } = useLoaderData();

  return (
    <Layout title="Check out these bands I like">
      <SearchInput />

      <GenrePicker genres={genres} expandable={true} />

      <ArtistList />
    </Layout>
  );
}
