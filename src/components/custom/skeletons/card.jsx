import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-[100px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-2 w-[100px]" />
        <Skeleton className="h-2 w-[60px]" />
      </div>
    </div>
  );
}
