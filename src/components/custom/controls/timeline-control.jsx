import { useCallback, useState } from 'react';

import { Slider } from '@/components/ui/slider';

import { convertSecondsToMinutes } from '@/lib/utils';

const TimelineControl = ({ media, thumbColor }) => {
  const [seek, setSeek] = useState(0);

  const handleOnScrub = useCallback((value) => setSeek(value[0]), [seek]);

  return (
    <div className="mt-2 flex gap-2">
      <span>{convertSecondsToMinutes(seek)}</span>
      <Slider
        step={1}
        defaultValue={[0]}
        max={media?.duration || 0}
        thumbColor={thumbColor}
        onValueChange={handleOnScrub}
      />
      <span>{convertSecondsToMinutes(media?.duration)}</span>
    </div>
  );
};

export default TimelineControl;
