import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Renders a skeleton loading state for a track list component.
 * This component displays a series of skeleton placeholders to represent the structure of a track list before the actual data is loaded.
 * It includes a header with a title and a separator, followed by a list of 10 track list items.
 * Each track list item contains placeholders for the various elements of a track, such as the album art, track title, artist, duration, and playback controls.
 */
const SkeletonTrackList = () => {
  return (
    <div className="mb-32">
      <div className="mt-5 flex flex-col gap-2">
        <Skeleton className="h-9 w-40 rounded-md" />
        <Skeleton className="h-3 w-60 rounded-md" />
      </div>
      <Separator className="my-4" />
      {Array.from({ length: 10 }).map((_, index) => (
        <SkeletonTrackListItem key={index} />
      ))}
    </div>
  );
};

export default SkeletonTrackList;

/**
 * Renders a skeleton loading state for a single track list item.
 * This component displays a series of skeleton placeholders to represent the various elements of a track, such as the album art, track title, artist, duration, and playback controls.
 */
const SkeletonTrackListItem = () => {
  return (
    <>
      <div className="flex justify-between">
        <Skeleton className="h-9 w-9 rounded-md" />
        <Skeleton className="h-9 w-72 rounded-md" />
        <Skeleton className="h-9 w-48 rounded-md" />
        <Skeleton className="h-9 w-[100px] rounded-md" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-9 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-md" />
        </div>
        <Skeleton className="h-9 w-[60px] rounded-md" />
      </div>
      <Separator className="my-2" />
    </>
  );
};
