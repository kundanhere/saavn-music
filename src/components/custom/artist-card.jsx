import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useStore } from '@/store/useStore';

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
    <div {...props} className={`${className} space-y-3`} style={{ maxWidth: size + 'px' }}>
      <Avatar className="w-auto h-auto group" style={{ height: size + 'px', width: size + 'px' }}>
        <AvatarImage
          src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75"
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
        <AvatarFallback className="text-5xl text-muted-foreground">{getAlphabet(media.artist) || '#'}</AvatarFallback>
      </Avatar>
      <div className="flex items-start justify-center text-center text-xs max-h-10 overflow-hidden">
        <Link
          to={'/artist/' + media.id}
          onClick={() => setCanGoBack(true)}
          style={{ width: `calc(${size - 15}px)` }}
          className="text-[0.5rem] text-balance text-center leading-5 tracking-tight inline-block items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring justify-start hover:text-muted-foreground"
        >
          {media.artist || 'Lena Logic'}
        </Link>
      </div>
    </div>
  );
};

export default ArtistCard;
