import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

import { SkeletonArtistCard } from './artist-card';
import SkeletonSlider from './slider';

/**
 * Renders a skeleton loading state for the home page.
 * This component displays various skeleton placeholders to represent the layout and content of the home page while the actual data is being loaded.
 * It includes skeleton placeholders for a header, a series of sliders, and other UI elements.
 */

const SkeletonHome = () => {
  return (
    <div className="mb-32">
      <Skeleton className="flex h-9 w-56 items-center justify-start rounded-lg p-[0.3rem]">
        <Skeleton className="h-full w-20 rounded-md bg-background" />
      </Skeleton>
      <div className="mt-5 flex flex-col gap-2">
        <Skeleton className="h-9 w-40 rounded-md" />
        <Skeleton className="h-3 w-60 rounded-md" />
      </div>
      <Separator className="my-4" />
      <SkeletonSlider size={200} />
      <div className="my-4 flex justify-between">
        <Skeleton className="h-9 w-40 rounded-md" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-24 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>
      <SkeletonSlider size={150} />
      <div className="my-4 flex justify-between">
        <Skeleton className="h-9 w-40 rounded-md" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-24 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>
      <SkeletonSlider size={150} />
      <div className="my-4 flex justify-between">
        <Skeleton className="h-9 w-40 rounded-md" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-24 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>
      <SkeletonSlider size={140} slot={SkeletonArtistCard} />
    </div>
  );
};

export default SkeletonHome;
