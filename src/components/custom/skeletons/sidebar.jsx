import { Skeleton } from '@/components/ui/skeleton';

/**
 * Renders a skeleton UI for the sidebar component, including sections for Discover, Library, and Playlists.
 * This component is used to provide a loading state for the sidebar while the actual data is being fetched.
 * The skeleton UI consists of a series of Skeleton components that mimic the layout and structure of the actual sidebar.
 */
const SkeletonSidebar = () => {
  return (
    <div className="mb-24 pb-12">
      <div className="space-y-4 py-4">
        <div className="px-6 py-2">
          <h2 className="mb-2 px-1 text-lg font-semibold tracking-tight">Discover</h2>
          <div className="space-y-2">
            <div className="flex justify-start gap-2">
              <Skeleton className="h-8 w-10 rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
            <div className="flex justify-start gap-2">
              <Skeleton className="h-8 w-10 rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          </div>
        </div>
        <div className="px-6 py-2">
          <h2 className="mb-2 px-1 text-lg font-semibold tracking-tight">Library</h2>
          <div className="space-y-2">
            <div className="flex justify-start gap-2">
              <Skeleton className="h-8 w-10 rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
            <div className="flex justify-start gap-2">
              <Skeleton className="h-8 w-10 rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
            <div className="flex justify-start gap-2">
              <Skeleton className="h-8 w-10 rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
            <div className="flex justify-start gap-2">
              <Skeleton className="h-8 w-10 rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="relative px-3 text-lg font-semibold tracking-tight">Playlists</h2>
          <div className="space-y-2 p-2">
            <div className="flex justify-start gap-2">
              <Skeleton className="h-8 w-10 rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
            <div className="flex justify-start gap-2">
              <Skeleton className="h-8 w-10 rounded-md" />
              <Skeleton className="h-8 w-full rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSidebar;
