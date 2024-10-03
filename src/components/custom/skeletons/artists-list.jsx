import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

import { SkeletonArtistCard } from './artist-card';

const SkeletonArtistsList = () => {
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
          <SkeletonArtistCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonArtistsList;
