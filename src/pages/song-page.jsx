import { LoaderCircle } from 'lucide-react';

import SkeletonTrackList from '@/components/custom/skeletons/track-list';
import TrackList from '@/components/custom/track-list';

import useInfiniteFetch from '@/hooks/use-infinite-fetch';

import { useLanguage } from '@/providers/language-provider';

import Page from './layout';

/**
 * Renders the main song page component, which fetches and displays a list of trending songs.
 *
 * This component uses the `useInfiniteFetch` hook to fetch the song data in pages, and
 * renders a `TrackList` component for each page of data. It also displays a loading
 * indicator when fetching the next page of data.
 *
 * If there is an error fetching the data, an error message is displayed instead.
 *
 * @returns {JSX.Element} The rendered song page component.
 */
const SongPage = () => {
  const { lang } = useLanguage();

  // Fetch the infinite list of songs using the `useInfiniteFetch` hook.
  const { data, isPending, error, isFetchingNextPage, ref } = useInfiniteFetch(lang, 'songs', 10);

  // Render a skeleton loader while the data is still being fetched.
  if (isPending) return <SkeletonTrackList />;

  // If there is an error, display an error message.
  if (error) return <div>Error fetching data: {error.message}</div>;

  // Render the track list for each page of song data and display the loading indicator for the next page.
  return (
    <Page title="Top Hits" body="Trending songs this week. Updated daily.">
      {data?.pages?.map((page) => (
        <TrackList key={page.currentPage} data={page.data?.results} itemIndex={false} />
      ))}

      {/* Display loading indicator for the next page */}
      <div ref={ref} className="flex w-full justify-center p-2">
        {isFetchingNextPage && <LoaderCircle className="h-8 w-8 animate-spin text-foreground/50" />}
      </div>
    </Page>
  );
};

export default SongPage;
