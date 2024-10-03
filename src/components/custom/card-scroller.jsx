import { lazy } from 'react';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { cn } from '@/lib/utils';

const TrackCard = lazy(() => import('./cards/track-card'));

/**
 * A reusable component that renders a scrollable area with a set of cards.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.card=TrackCard] - The card component to render.
 * @param {number} [props.size=150] - The size of the cards.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 * @param {any[]} props.data - The data to render as cards.
 * @returns {React.ReactElement} The rendered CardScroller component.
 */
const CardScroller = ({ card: Card = TrackCard, size = 150, className, data, ...props }) => {
  return (
    <div className={cn('relative flex', className)} {...props}>
      <ScrollArea type="never" className="w-1 flex-1 overflow-x-auto">
        <div className="flex space-x-5 pb-4 pr-14">
          {data?.map((content) => (
            <Card key={content.id} media={content} size={size} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CardScroller;
