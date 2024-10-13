import { motion } from 'framer-motion';
import { CirclePlay } from 'lucide-react';
import { Link } from 'react-router-dom';

import * as T from '@/components/ui/tooltip';

import { capitalizeFirstLetter, cn, formatString, stripHtml } from '@/lib/utils';

import { useStore } from '@/store/use-store';

const TrackCard = ({ size = 150, className, media, ...props }) => {
  let { setCanGoBack } = useStore();

  return (
    <div className={cn('space-y-3', className)} style={{ maxWidth: `${size}px` }} {...props}>
      <div className="card-content group relative overflow-hidden rounded-md shadow-md shadow-black/20 hover:before:opacity-[1]">
        <div className="absolute left-1/2 top-1/2 z-20 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center group-hover:inline-flex">
          <T.TooltipProvider>
            <T.Tooltip>
              <T.TooltipTrigger onClick={() => console.log('Play button clicked')}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-fit w-fit rounded-full hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <CirclePlay size={size / 2.5} className="max-w-24 text-white/80" />
                </motion.div>
              </T.TooltipTrigger>
              <T.TooltipContent>
                <p>Play</p>
              </T.TooltipContent>
            </T.Tooltip>
          </T.TooltipProvider>
        </div>
        <img
          alt={media.name}
          width={size}
          height={size}
          className="relative -z-10 aspect-square h-auto w-auto object-cover transition-all group-hover:scale-105"
          src={
            media.image[2].url ||
            'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75'
          }
        />
      </div>
      <div className="flex flex-col space-y-1 text-xs">
        <Link
          to={`/details/${media.type}/${media.id}`}
          style={{ width: `${size - 10}px` }}
          onClick={() => setCanGoBack(true)}
          className="inline-flex origin-left scale-95 items-center justify-start truncate text-[0.75rem] leading-4 tracking-tight transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {capitalizeFirstLetter(stripHtml(media.name))}
        </Link>
        <Link
          to={`/details/${media.id}`}
          style={{ width: `calc(${size - 10}px)` }}
          onClick={() => setCanGoBack(true)}
          className="inline-block origin-left scale-90 truncate text-[0.5rem] tracking-tight text-muted-foreground transition-colors hover:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {media.album?.name
            ? `Album - ${capitalizeFirstLetter(stripHtml(media.album?.name))}`
            : formatString(media.artists?.primary) || capitalizeFirstLetter(stripHtml(media.type))}
        </Link>
      </div>
    </div>
  );
};

export default TrackCard;
