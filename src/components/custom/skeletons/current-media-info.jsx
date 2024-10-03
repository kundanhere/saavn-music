import { motion } from 'framer-motion';

import { Skeleton } from '@/components/ui/skeleton';

/**
 * Renders a skeleton loading state for the current media information.
 * This component is used to provide a placeholder UI while the actual media information is being loaded.
 * It displays a skeleton loader for the media thumbnail and the media title, artist, and duration.
 */
const SkeletonCurrentMediaInfo = () => {
  return (
    <motion.div className="hidden h-full w-full max-w-sm md:flex" whileTap={{ scale: 0.96 }}>
      <Skeleton className="h-28 w-28 rounded-none" />
      <div className="flex h-full max-w-sm flex-col items-start justify-center gap-4 pl-2 pr-4 text-left">
        <Skeleton className="h-8 w-44" />
        <Skeleton className="h-2 w-44" />
        <Skeleton className="h-2 w-32" />
      </div>
    </motion.div>
  );
};

export default SkeletonCurrentMediaInfo;
