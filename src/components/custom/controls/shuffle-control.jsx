import { Shuffle } from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';

const ShuffleControl = () => {
  return (
    <Toggle className="h-10 w-10 cursor-pointer rounded-full focus-visible:ring-0">
      <Shuffle className="h-4 w-4" />
    </Toggle>
  );
};

export default ShuffleControl;
