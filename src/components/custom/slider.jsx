import { Link } from 'react-router-dom';

import * as Comp from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

import { useStore } from '@/store/use-store';

import TrackCard from './track-card';

const Slider = ({
  card: Card = TrackCard,
  size = 150,
  title = 'Title',
  category = 'category',
  className = '',
  data,
  ...props
}) => {
  let { setCanGoBack } = useStore();

  return (
    <div className={cn('relative -ml-1 pt-4', className)} {...props}>
      <Comp.Carousel className="w-full max-w-screen-lg">
        <div className="flex w-full items-end justify-between pl-1">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <div className="absolute right-12 flex gap-1">
            <Link className="mr-2 hover:text-muted-foreground" to={`/${category}`} onClick={() => setCanGoBack(true)}>
              View all
            </Link>
            <Comp.CarouselPrevious className="relative left-0 top-4 rounded-md" />
            <Comp.CarouselNext className="relative left-0 top-4 rounded-md" />
          </div>
        </div>
        <Separator className="my-4" />
        <Comp.CarouselContent className="-ml-1 mr-12 pb-4">
          {data.map((content, index) => (
            <Comp.CarouselItem key={index} className="basis-44 p-2 pl-1 last:pr-0">
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
