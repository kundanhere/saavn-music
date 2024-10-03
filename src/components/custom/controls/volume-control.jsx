import { Volume, Volume1, Volume2, VolumeOff } from 'lucide-react';

import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';

import useMediaControls from '@/hooks/use-media-controls';

const VolumeControl = ({ thumbColor }) => {
  const { volume, handleMuteChange, handleVolumeChange } = useMediaControls();

  return (
    <div className="flex w-full items-center justify-end p-2">
      <Toggle
        pressed={volume < 0}
        onPressedChange={handleMuteChange}
        className="h-10 w-10 cursor-pointer rounded-full p-0 focus-visible:ring-0"
      >
        {volume <= 0 ? (
          <VolumeOff className="h-5 w-5" />
        ) : volume >= 1 && volume <= 33 ? (
          <Volume className="h-5 w-5" />
        ) : volume >= 34 && volume <= 66 ? (
          <Volume1 className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </Toggle>
      <div className="w-1/2 px-4">
        <Slider step={1} max={100} thumbColor={thumbColor} defaultValue={[volume]} onValueChange={handleVolumeChange} />
      </div>
    </div>
  );
};

export default VolumeControl;
