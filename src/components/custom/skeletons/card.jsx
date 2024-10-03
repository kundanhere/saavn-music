import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';

/**
 * Renders a skeleton card component with a square image and two lines of text.
 *
 * @param {Object} props - The component props.
 * @param {number} [props.size=100] - The size of the square image in pixels.
 * @param {string} [props.className] - Additional CSS classes to apply to the text lines.
 * @returns {JSX.Element} The skeleton card component.
 */
export function SkeletonCard({ size = 100, className }) {
  return (
    <div className="flex flex-col space-y-2">
      <Skeleton className="rounded-md" style={{ width: `${size}px`, height: `${size}px` }} />
      <div className="space-y-1">
        <Skeleton className={cn('h-3', className)} style={{ width: `${size - 10}px` }} />
        <Skeleton className={cn('h-3', className)} style={{ width: `${size - 45}px` }} />
      </div>
    </div>
  );
}
