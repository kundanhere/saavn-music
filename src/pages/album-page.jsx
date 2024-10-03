import { LoaderCircle } from 'lucide-react';

import AlbumCard from '@/components/custom/cards/track-card';
import SkeletonAlbumsList from '@/components/custom/skeletons/albums-list';

import useInfiniteFetch from '@/hooks/use-infinite-fetch';

import { useLanguage } from '@/providers/language-provider';

import Page from './layout';

/**
 * Renders the AlbumPage component, which displays a grid of album cards fetched from an API.
 * The component uses the `useInfiniteFetch` hook to fetch the album data and manage the loading state.
 * If the data is still being fetched, a skeleton loader is displayed. If there is an error, an error message is shown.
 * Otherwise, the component renders a grid of `AlbumCard` components for each album in the fetched data.
 * A loading indicator is displayed at the bottom of the page when fetching the next page of data.
 */
const AlbumPage = () => {
  const { lang } = useLanguage();

  // Use the useInfiniteFetch hook to fetch the album data and manage the loading state.
  const { data, isPending, error, isFetchingNextPage, ref } = useInfiniteFetch(lang, 'albums', 16);

  // Render a skeleton loader while the data is still being fetched.
  if (isPending) return <SkeletonAlbumsList />;

  // If there is an error, display an error message.
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <Page title="Top Albums" body="Top albums this week. Updated weekly.">
      <div className="itemc mt-6 grid h-full w-full grid-cols-4 gap-x-0 gap-y-6 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8">
        {/* Render a grid of AlbumCard components for each album in the data. */}
        {data?.pages?.map((page) =>
          page.data.results?.map((album) => <AlbumCard key={album.id} media={album} size={100} />)
        )}
      </div>

      {/* Display loading indicator for the next page */}
      <div ref={ref} className="flex w-full justify-center p-2">
        {isFetchingNextPage && <LoaderCircle className="h-8 w-8 animate-spin text-foreground/50" />}
      </div>
    </Page>
  );
};

export default AlbumPage;
