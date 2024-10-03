import { Play, SkipBack, SkipForward } from 'lucide-react';

import { Button } from '@/components/ui/button';

import useMediaControls from '@/hooks/use-media-controls';

const PlayControl = () => {
  const { isPlaying, setIsPlaying } = useMediaControls();

  return (
    <>
      <Button variant="ghost" size="sm" className="h-10 w-10 cursor-pointer rounded-full focus-visible:ring-0">
        <SkipBack className="h-4 w-4 fill-white" />
      </Button>
      <Button
        size="md"
        variant="outline"
        className="h-14 w-14 cursor-pointer rounded-full border-slate-200 bg-transparent focus-visible:ring-0"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-pause"
          >
            <line x1="10" x2="10" y1="15" y2="9" />
            <line x1="14" x2="14" y1="15" y2="9" />
          </svg>
        ) : (
          <Play className="h-6 w-6" />
        )}
      </Button>
      <Button variant="ghost" size="sm" className="h-10 w-10 cursor-pointer rounded-full focus-visible:ring-0">
        <SkipForward className="h-4 w-4 fill-white" />
      </Button>
    </>
  );
};

export default PlayControl;
