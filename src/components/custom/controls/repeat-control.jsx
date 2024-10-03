import { Repeat } from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';

const RepeatControl = () => {
  return (
    <Toggle className="h-10 w-10 cursor-pointer rounded-full focus-visible:ring-0">
      <Repeat className="h-4 w-4" />
    </Toggle>
  );
};

export default RepeatControl;
