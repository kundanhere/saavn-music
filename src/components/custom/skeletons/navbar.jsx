import { Skeleton } from '@/components/ui/skeleton';

/**
 * Renders a skeleton loading state for the navbar component.
 * This component is used to provide a placeholder UI while the actual data is being loaded.
 * It includes placeholders for the app logo, menu items, navigation buttons, search input, and app theme/language controls.
 */
const SkeletonNavbar = () => {
  return (
    <div className="flex items-center justify-between px-2 py-2 lg:px-4">
      <div className="flex flex-shrink items-center space-x-2">
        {/* app logo */}
        <Skeleton className="inline-flex h-8 w-28 rounded-md" />
        {/* menu items  */}
        <Skeleton className="h-8 w-14 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>

      {/* navigation buttons */}
      <div className="flex flex-1 justify-start gap-1 pl-6">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>

      {/* search input */}
      <div className="flex flex-grow">
        <Skeleton className="h-8 w-full rounded-md" />
      </div>

      {/* app theme and language */}
      <div className="flex flex-1 justify-end gap-2">
        <span className="hidden gap-2 lg:flex">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </span>
        {/* Mobile menu */}
        <Skeleton className="block h-8 w-8 rounded-md lg:hidden" />
      </div>
    </div>
  );
};

export default SkeletonNavbar;
