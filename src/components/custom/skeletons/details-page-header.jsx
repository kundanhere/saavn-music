import { Skeleton } from '@/components/ui/skeleton';

/**
 * Renders a skeleton loader for the details page header, including a thumbnail image and several text elements.
 * This component is used to provide a loading state for the details page header before the actual content is available.
 */
const SkeletonDetailsPageHeader = () => {
  return (
    <div className="ml-6 mt-6 flex h-full w-full gap-8">
      <Skeleton className="h-[160px] w-[160px] flex-shrink rounded-md lg:shadow-lg" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-[300px]" />
        <Skeleton className="h-5 w-[400px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="mt-9 h-11 w-[92px] rounded-e-3xl rounded-s-3xl px-6 py-2" />
      </div>
    </div>
  );
};

export default SkeletonDetailsPageHeader;
