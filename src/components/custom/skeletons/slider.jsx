import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { SkeletonCard } from './card';

/**
 * A skeleton slider component that displays a series of skeleton cards.
 *
 * @param {Object} props - The component props.
 * @param {number} props.size - The size of the skeleton cards.
 * @param {React.ComponentType<{ size: number }>} [props.slot=SkeletonCard] - A custom component to use for the skeleton cards.
 * @returns {JSX.Element} - The skeleton slider component.
 */
const SkeletonSlider = ({ size, slot: Card = SkeletonCard }) => {
  return (
    <div className="flex">
      <ScrollArea type="never" className="w-1 flex-1 overflow-x-auto">
        <div className="flex space-x-5 pb-4">
          {Array.from({ length: 8 }, (_, index) => (
            <Card key={index} size={size} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default SkeletonSlider;
