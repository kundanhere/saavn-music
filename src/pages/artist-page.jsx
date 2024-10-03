import { LoaderCircle } from 'lucide-react';

import ArtistCard from '@/components/custom/cards/artist-card';
import SkeletonArtistsList from '@/components/custom/skeletons/artists-list';

import useInfiniteFetch from '@/hooks/use-infinite-fetch';

import Page from './layout';

const ArtistPage = () => {
  // Fetch and paginate artist data using the `useInfiniteFetch` hook.
  const { data, isPending, error, isFetchingNextPage, ref } = useInfiniteFetch('artist', 'artists', 16);

  // Render a skeleton loader while the data is still being fetched.
  if (isPending) return <SkeletonArtistsList />;

  // If there is an error, display an error message.
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <Page title="Top Artists" body="Top selected artists for you. Updated weekly.">
      <div className="grid h-full w-full grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
        {data?.pages?.map((page) =>
          page.data.results?.map((artist) => <ArtistCard key={artist.id} media={artist} size={100} className="mb-3" />)
        )}
      </div>

      {/* Display loading indicator for the next page */}
      <div ref={ref} className="flex w-full justify-center p-2">
        {isFetchingNextPage && <LoaderCircle className="h-8 w-8 animate-spin text-foreground/50" />}
      </div>
    </Page>
  );
};

export default ArtistPage;
