import { motion } from 'framer-motion';
import { CirclePlay } from 'lucide-react';
import { Link } from 'react-router-dom';

import * as T from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { useStore } from '@/store/use-store';

const TrackCard = ({ size = 150, className = '', media, ...props }) => {
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
                  <CirclePlay size={size / 2.5} className="text-white/80" />
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
            media.cover ||
            'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75'
          }
        />
      </div>
      <div className="flex flex-col space-y-1 text-xs">
        <Link
          to={`/details/${media.id}`}
          style={{ width: `calc(${size - 10}px)` }}
          onClick={() => setCanGoBack(true)}
          className="inline-flex items-center justify-start whitespace-nowrap text-[0.75rem] font-medium leading-none tracking-tight transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {media.album || 'Thinking Components'}
        </Link>
        <Link
          to={`/details/${media.id}`}
          style={{ width: `calc(${size - 10}px)` }}
          onClick={() => setCanGoBack(true)}
          className="inline-block items-center justify-start truncate whitespace-nowrap text-[0.5rem] leading-5 tracking-tight text-muted-foreground transition-colors hover:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {media.artist || 'Lena Logic'}
        </Link>
      </div>
    </div>
  );
};

export default TrackCard;
