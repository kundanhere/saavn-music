import { motion } from 'framer-motion';

import { capitalizeFirstLetter, formatString } from '@/lib/utils';

const CurrentMediaInfo = ({ data }) => {
  return (
    <motion.button
      className="hidden h-full w-full max-w-sm cursor-default hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary md:flex"
      whileTap={{ scale: 0.96 }}
    >
      <div className="h-full min-w-28 max-w-28 overflow-hidden">
        <img src={data?.image[1].url} width={112} height={112} alt="current song" />
      </div>
      <div className="flex h-full max-w-sm flex-col items-start justify-center overflow-hidden pl-2 pr-4 text-left">
        <h2 className="w-full truncate text-2xl font-semibold">{data?.name || 'Untitled Song'}</h2>
        <p className="w-full origin-left scale-90 truncate">
          {data ? formatString(data.artists?.primary) : 'Untitled Artist'}
        </p>
        <p className="origin-left scale-90">{data ? `${capitalizeFirstLetter(data.type)} • ${data.year}` : ''}</p>
      </div>
    </motion.button>
  );
};

export default CurrentMediaInfo;
