import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import TrackCard from '@/components/custom/track-card';

const CardScroller = ({ data, className, ...props }) => {
  return (
    <div {...props} className={`${className} relative flex`}>
      <ScrollArea type="never" className="w-1 flex-1 overflow-x-auto">
        <div className="flex space-x-5 pr-14 pb-4">
          {data.map((content) => (
            <TrackCard key={content.id} media={content} size={120} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CardScroller;
