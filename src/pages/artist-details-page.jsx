import { motion } from 'framer-motion';
import { BadgeCheck, LoaderCircle, PlayIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import SkeletonDetailsPageHeader from '@/components/custom/skeletons/details-page-header';
import TrackList from '@/components/custom/track-list';
import { Button } from '@/components/ui/button';

import { useInfintieFetchArtistSongs } from '@/hooks/use-infinite-fetch';
import useInputDrivenAnimations from '@/hooks/use-input-driven-animations';

import { capitalizeFirstLetter, cn } from '@/lib/utils';

const ArtistDetailsPage = () => {
  // 1. Get the album ID from the URL
  const { id } = useParams();

  // 2. Fetch artist's songs using the API and store the data in the "data" state
  const { data, isPending, isFetchingNextPage, ref } = useInfintieFetchArtistSongs(id);

  // 3. Sticky header animation
  const { scrollRef, props, imageProps } = useInputDrivenAnimations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute left-0 top-0 h-full w-full"
    >
      <div ref={scrollRef} className="no-scrollbar h-screen overflow-y-scroll">
        {/* Stickky Header */}
        <div className="sticky -top-[104px] z-10 flex h-full max-h-[240px] w-full overflow-hidden bg-white dark:bg-black">
          <div
            className="absolute -left-5 -top-5 z-0 h-[110%] w-[110%] bg-cover bg-center blur-3xl"
            style={{ backgroundImage: `url(${data?.pages[0]?.data?.image[0].url})` }}
          />
          <div className="relative flex h-full w-full items-start bg-black/50 p-4 text-white/90">
            {isPending ? (
              <SkeletonDetailsPageHeader />
            ) : (
              <>
                <motion.div
                  style={imageProps}
                  className="absolute h-[160px] w-[160px] flex-shrink overflow-hidden rounded-md bg-white/10 transition-all duration-75 lg:shadow-lg"
                >
                  <img
                    alt="cover-image"
                    src={data?.pages[0]?.data?.image[2].url}
                    className="aspect-square h-auto w-auto object-cover transition-all duration-500 hover:scale-105"
                  />
                </motion.div>
                <motion.div style={props} className="absolute flex-grow">
                  <div className="flex gap-1">
                    <h1 className="text-4xl font-semibold leading-10">
                      {data?.pages[0]?.data?.name || 'Untitled name'}
                    </h1>
                    {data?.pages[0]?.data?.isVerified && (
                      <BadgeCheck className="text-muted dark:text-muted-foreground" />
                    )}
                  </div>
                  <h3 className="text-sm leading-7 text-muted dark:text-muted-foreground">
                    {data
                      ? `${capitalizeFirstLetter(data?.pages[0]?.data.dominantLanguage)} ${capitalizeFirstLetter(data?.pages[0]?.data.dominantType)}`
                      : 'Untitled description'}
                  </h3>
                  <h3 className="text-xs text-muted dark:text-muted-foreground">
                    {data
                      ? `${capitalizeFirstLetter(data?.pages[0]?.data.type)} • ${data?.pages[0]?.data.followerCount} followers`
                      : ''}
                  </h3>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="absolute mt-10 rounded-e-3xl rounded-s-3xl bg-white/30 px-6 py-2 hover:dark:bg-white/50"
                  >
                    <PlayIcon className="mr-2 h-4 w-4" />
                    Play
                  </Button>
                </motion.div>
              </>
            )}
          </div>
        </div>
        {/* Scrollable content */}
        <div className={cn('p-4 pb-96', data?.pages[0]?.data?.topSongs?.length > 3 ? 'pb-4' : 'pb-96')}>
          {data?.pages?.map((page) => (
            <TrackList key={page.currentPage} data={page.data?.topSongs} itemIndex={false} />
          ))}
        </div>

        {/* Display loading indicator for the next page */}
        <div ref={ref} className="mb-40 flex w-full justify-center p-2">
          {isFetchingNextPage && <LoaderCircle className="h-8 w-8 animate-spin text-foreground/50" />}
        </div>
      </div>
    </motion.div>
  );
};

export default ArtistDetailsPage;