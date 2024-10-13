import { Suspense, lazy } from 'react';

import Error from '@/components/custom/error';
import ErrorBoundary from '@/components/custom/error-boundary';
import HomeTabs from '@/components/custom/home-tabs';
import SkeletonHome from '@/components/custom/skeletons/home';
import SkeletonSlider from '@/components/custom/skeletons/slider';
import { TabsContent } from '@/components/ui/tabs';

import useFetchTopResults from '@/hooks/use-fetch-top-results';

import { useLanguage } from '@/providers/language-provider';

import Page from './layout';

const Slider = lazy(() => import('@/components/custom/slider'));
const ArtistCard = lazy(() => import('@/components/custom/cards/artist-card'));
const CardScroller = lazy(() => import('@/components/custom/card-scroller'));

/**
 * The HomePage component is the main page of the application, displaying various content sections such as playlists, new releases, top albums, and popular artists.
 * It uses the Tabs component to switch between different content sections, and fetches data from the API using the fetchSearchResults function.
 * The component also utilizes several custom components like ArtistCard, CardScroller, and Slider to display the content.
 */
const HomePage = () => {
  const { lang } = useLanguage();

  // Fetches the top results data for the given query.
  const { isPending, error, data } = useFetchTopResults(lang);

  // Renders a skeleton loading state for the home page when data is being fetched.
  // This is used as a fallback while the actual content is being loaded.
  if (isPending) return <SkeletonHome />;

  // Renders an error message when the data fetching fails.
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div className="mb-32">
      <HomeTabs defaultValue="music">
        <TabsContent value="music">
          <Page title="Listen Now" body="Top picks for you. Updated daily." styles="mt-2 space-y-6">
            <ErrorBoundary fallback={<Error msg={'Could not fetch data.'} />}>
              <Suspense fallback={isPending && <SkeletonSlider size={200} />}>
                <CardScroller data={data?.playlists?.results} size={200} />
              </Suspense>
              <Suspense fallback={<SkeletonSlider size={150} />}>
                <Slider data={data?.songs?.results} title="New Releases" category="songs" />
              </Suspense>
              <Suspense fallback={<SkeletonSlider size={150} />}>
                <Slider data={data?.albums?.results} title="Tob Albums" category="albums" />
              </Suspense>
              <Suspense fallback={<SkeletonSlider size={140} />}>
                <Slider
                  data={data?.artists?.results}
                  title="Popular Artists"
                  category="artists"
                  card={ArtistCard}
                  size={140}
                />
              </Suspense>
            </ErrorBoundary>
          </Page>
        </TabsContent>
        <TabsContent value="live">
          <Page title="Made for You" body="Your personal playlists. Updated daily." styles="mb-0 mt-2">
            <p>Display page content here.</p>
          </Page>
        </TabsContent>
      </HomeTabs>
    </div>
  );
};

export default HomePage;
