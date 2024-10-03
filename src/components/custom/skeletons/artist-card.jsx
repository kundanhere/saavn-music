import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';

/**
 * Renders a skeleton loading state for an artist card component.
 *
 * @param {Object} props - The component props.
 * @param {number} [props.size=100] - The size of the artist avatar in pixels.
 * @param {string} [props.className] - Additional CSS classes to apply to the skeleton text.
 * @returns {JSX.Element} The skeleton artist card component.
 */
export function SkeletonArtistCard({ size = 100, className }) {
  return (
    <div className="flex flex-col items-center space-y-3">
      <Skeleton className="rounded-full" style={{ width: `${size}px`, height: `${size}px` }} />
      <Skeleton className={cn('h-3', className)} style={{ width: `${size - 30}px` }} />
    </div>
  );
}
