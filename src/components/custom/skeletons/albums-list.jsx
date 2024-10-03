import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

import { SkeletonCard } from './card';

/**
 * Renders a skeleton loading state for an albums list component.
 * The component displays a title, subtitle, and a grid of skeleton card components.
 * This is typically used as a placeholder while the actual album data is being loaded.
 */
const SkeletonAlbumsList = () => {
  return (
    <div className="mb-32">
      <div className="mt-5 flex flex-col gap-2">
        <Skeleton className="h-9 w-40 rounded-md" />
        <Skeleton className="h-3 w-60 rounded-md" />
      </div>
      <Separator className="my-4" />
      <div className="flex flex-wrap gap-6">
        {/* Render 16 skeleton card components */}
        {Array.from({ length: 16 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonAlbumsList;
