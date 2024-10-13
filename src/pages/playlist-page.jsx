import { LoaderCircle } from 'lucide-react';

import PlaylistCard from '@/components/custom/cards/track-card';
import SkeletonPlaylist from '@/components/custom/skeletons/albums-list';

import useInfiniteFetch from '@/hooks/use-infinite-fetch';

import { useLanguage } from '@/providers/language-provider';

import Page from './layout';

/**
 * Renders the Playlist Page component, which displays a grid of playlist cards fetched from the API.
 * The component uses the `useInfiniteFetch` hook to handle the data fetching and loading state.
 * If there is an error fetching the data, an error message is displayed.
 * If the data is still being fetched, a skeleton loader is displayed.
 * Otherwise, the component renders a grid of `PlaylistCard` components for each playlist in the data.
 * A loading indicator is displayed at the bottom of the page when fetching the next page of data.
 */
const PlaylistPage = () => {
  const { lang } = useLanguage();

  // Use the useInfiniteFetch hook to fetch the playlist data and manage the loading state.
  const { data, isPending, error, isFetchingNextPage, ref } = useInfiniteFetch(lang, 'playlists', 16);

  // Render a skeleton loader while the data is still being fetched.
  if (isPending) return <SkeletonPlaylist />;

  // If there is an error, display an error message.
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <Page title="Top Playlists" body="Top playlists this week. Updated weekly.">
      <div className="itemc mt-6 grid h-full w-full grid-cols-4 gap-x-0 gap-y-6 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8">
        {/* Render a grid of PlaylistCard components for each plalists in the data. */}
        {data?.pages?.map((page) =>
          page.data.results?.map((playlist) => <PlaylistCard key={playlist.id} media={playlist} size={100} />)
        )}
      </div>

      {/* Display loading indicator for the next page */}
      <div ref={ref} className="flex w-full justify-center p-2">
        {isFetchingNextPage && <LoaderCircle className="h-8 w-8 animate-spin text-foreground/50" />}
      </div>
    </Page>
  );
};

export default PlaylistPage;
