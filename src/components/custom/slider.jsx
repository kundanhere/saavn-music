import * as Comp from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import TrackCard from '@/components/custom/track-card';

const Slider = ({ card: Card = TrackCard, size = 150, title = 'Title', className = '', data, ...props }) => {
  return (
    <div {...props} className={`${className} relative -ml-1 pt-4`}>
      <Comp.Carousel className="w-full max-w-screen-lg">
        <div className="w-full flex items-end justify-between pl-1">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <div className="absolute right-12 flex gap-1">
            <Comp.CarouselPrevious className="relative top-4 left-0 rounded-md" />
            <Comp.CarouselNext className="relative top-4 left-0 rounded-md" />
          </div>
        </div>
        <Separator className="my-4" />
        <Comp.CarouselContent className="-ml-1 mr-12 pb-4">
          {data.map((content, index) => (
            <Comp.CarouselItem key={index} className="p-2 pl-1 last:pr-0 basis-44">
              <div className="px-1">
                <Card media={content} size={size} />
              </div>
            </Comp.CarouselItem>
          ))}
        </Comp.CarouselContent>
      </Comp.Carousel>
    </div>
  );
};

export default Slider;
