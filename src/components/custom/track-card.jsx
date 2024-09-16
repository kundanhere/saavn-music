import { CirclePlay } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const TrackCard = ({ size = 150, className = '', media, ...props }) => {
  return (
    <div {...props} className={`${className} space-y-3`} style={{ maxWidth: size + 'px' }}>
      <div className="relative overflow-hidden rounded-md shadow-md shadow-black/20 card-content hover:before:opacity-[1] group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full items-center justify-center hidden group-hover:inline-flex z-20">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger onClick={() => console.log('Play button clicked')}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="hover:bg-transparent w-fit h-fit rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <CirclePlay size={52} className="text-white/80" />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Play</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <img
          alt={media.name}
          width={size}
          height={size}
          className="h-auto w-auto object-cover transition-all group-hover:scale-105 relative -z-10 aspect-square"
          src={
            media.cover ||
            'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75'
          }
        />
      </div>
      <div className="flex flex-col space-y-1 text-xs">
        <Link
          to={'/album/' + media.id}
          className="text-[0.75rem] leading-none font-medium tracking-tight inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring justify-start hover:text-muted-foreground"
          style={{ width: `calc(${size - 10}px)` }}
        >
          {media.album || 'Thinking Components'}
        </Link>
        <Link
          to={'/artist/' + media.id}
          className="text-[0.5rem] truncate leading-5 text-muted-foreground tracking-tight inline-block items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring justify-start hover:text-muted-foreground/70"
          style={{ width: `calc(${size - 10}px)` }}
        >
          {media.artist || 'Lena Logic'}
        </Link>
      </div>
    </div>
  );
};

export default TrackCard;
