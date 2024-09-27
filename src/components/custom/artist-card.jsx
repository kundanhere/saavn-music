import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { cn } from '@/lib/utils';

import { useStore } from '@/store/use-store';

/**
 * A function to generate initials from a full name.
 *
 * @param {string} name - The full name from which to generate initials.
 * @returns {string} The initials of the name. If the name is empty or null, returns an empty string.
 */
function getAlphabet(name) {
  if (!name) return '';
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');
  return initials;
}

const ArtistCard = ({ size = 140, className = '', media, ...props }) => {
  let { setCanGoBack } = useStore();

  return (
    <div className={cn('space-y-3 pl-1', className)} style={{ maxWidth: `${size}px` }} {...props}>
      <Avatar
        className="group h-auto w-auto ring-1 ring-[#bebebe80] dark:ring-[#454e5d80]"
        style={{ height: `${size}px`, width: `${size}px` }}
      >
        <AvatarImage
          src={
            media.cover ||
            'https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75'
          }
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="group/wrap hidden cursor-pointer group-hover:block">
          <div className="absolute left-1/2 top-1/2 z-0 h-1/2 max-h-20 w-1/2 max-w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur-xl transition-all duration-500 group-hover/wrap:scale-110" />
          <Play
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 fill-white text-white"
            style={{ width: size - 110 }}
          />
        </div>
        <AvatarFallback className="text-5xl text-muted-foreground">{getAlphabet(media.name) || '#'}</AvatarFallback>
      </Avatar>
      <div className="flex max-h-10 items-start justify-center overflow-hidden text-xs">
        <Link
          to={`/artist/${media.id}`}
          onClick={() => setCanGoBack(true)}
          style={{ width: `${size}px` }}
          className="inline-block items-center justify-start truncate whitespace-nowrap text-center text-[0.5rem] leading-5 tracking-tight transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {media.name || 'Lena Logic'}
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
