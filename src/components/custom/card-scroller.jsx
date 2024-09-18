import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { cn } from '@/lib/utils';

import TrackCard from './track-card';

const CardScroller = ({ card: Card = TrackCard, size = 150, className = '', data, ...props }) => {
  return (
    <div className={cn('relative flex', className)} {...props}>
      <ScrollArea type="never" className="w-1 flex-1 overflow-x-auto">
        <div className="flex space-x-5 pb-4 pr-14">
          {data.map((content) => (
            <Card key={content.id} media={content} size={size} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CardScroller;
