import { useRef } from 'react';

import { useQuery } from '@tanstack/react-query';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PlayIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import TrackList from '@/components/custom/track-list';
import { Button } from '@/components/ui/button';

import { capitalizeFirstLetter, cn } from '@/lib/utils';

import { fetchAlbumDetailsById } from '@/services/api/jio-saavn';

const AlbumDetailsPage = () => {
  // 1. Get the album ID from the URL
  const { type, id } = useParams();

  // 2. Fetch album details using the API and store the data in the "data" state
  const { data } = useQuery({
    queryKey: ['albumDetails', type, id],
    queryFn: async () => await fetchAlbumDetailsById(id),
  });

  // 3. Use ref for scroll container
  const scrollRef = useRef(null);

  // 4. Get scroll progress using Framer Motion's useScroll hook
  const { scrollYProgress } = useScroll({ container: scrollRef });

  // 5. Set animation properties for the text
  const props = {
    top: useTransform(scrollYProgress, [0, 0.4, 1], [30, 100, 100]),
    left: useTransform(scrollYProgress, [0, 0.4, 1], [220, 135, 135]),
    scale: useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.72, 0.72]),
    transformOrigin: 'bottom left',
  };

  // Set animation properties for the image
  const imageProps = {
    top: useTransform(scrollYProgress, [0, 0.4, 1], [30, 70, 70]),
    left: useTransform(scrollYProgress, [0, 0.4, 1], [30, 10, 10]),
    scale: props.scale,
    transformOrigin: props.transformOrigin,
  };

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
            style={{ backgroundImage: `url(${data?.image[0].url})` }}
          />
          <div className="relative flex h-full w-full items-start bg-black/50 p-4 text-white/90">
            <motion.div
              style={imageProps}
              className="absolute h-[160px] w-[160px] flex-shrink overflow-hidden rounded-md bg-white/10 transition-all duration-75 lg:shadow-lg"
            >
              <img
                alt="cover-image"
                src={data?.image[2].url}
                className="aspect-square h-auto w-auto object-cover transition-all duration-500 hover:scale-105"
              />
            </motion.div>
            <motion.div style={props} className="absolute flex-grow">
              <h1 className="text-4xl font-semibold leading-10">{data?.name || 'Untitled name'}</h1>
              <h3 className="text-sm leading-7 text-muted dark:text-muted-foreground">
                {data?.description || 'Untitled description'}
              </h3>
              <h3 className="text-xs text-muted dark:text-muted-foreground">
                {data ? `${capitalizeFirstLetter(data.type)} • ${data.year}` : ''}
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
          </div>
        </div>
        {/* Scrollable content */}
        <div className={cn('p-4 pb-96', data?.songs?.length > 3 ? 'pb-4' : 'pb-96')}>
          <TrackList data={data?.songs} className="mb-40" />
        </div>
      </div>
    </motion.div>
  );
};

export default AlbumDetailsPage;
