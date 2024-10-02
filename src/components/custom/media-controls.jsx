import { useEffect } from 'react';

import { motion } from 'framer-motion';
import * as Icon from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';

import useColors from '@/hooks/use-colors';
import useMediaControls from '@/hooks/use-media-controls';

const MediaControls = () => {
  const { volume, isPlaying, setIsPlaying, handleMuteChange, handleVolumeChange } = useMediaControls();
  const { color, putColor } = useColors();

  useEffect(() => {
    putColor('https://i.scdn.co/image/ab6761610000517451a6233108e4c65e402bc3e8');
  }, [color, putColor]);

  return (
    <div
      className="relative flex h-full w-full items-center justify-evenly text-center"
      style={{ backgroundColor: `${color}4d` /* 4d -> means opacity 0.3*/ }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black/30 dark:bg-white/30" />
      <div className="relative z-10 flex h-full w-full items-start justify-center px-1 md:justify-between">
        <motion.button
          className="hidden h-full max-w-md cursor-default hover:bg-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary md:flex"
          whileTap={{ scale: 0.96 }}
        >
          <div className="h-full min-w-28 max-w-28 overflow-hidden">
            <img src="https://i.scdn.co/image/ab67616d00001e02576521b1bf3ec2fd7fdfcbd5" alt="current song" />
          </div>
          <div className="flex h-full max-w-xs flex-col items-start justify-center px-2 text-left">
            <h2 className="w-full truncate text-2xl font-semibold">Dil Diyan Gallan</h2>
            <p className="w-full origin-left scale-90 truncate">
              2017 · Hindi Album · Vishal & Shekhar and Julius Packiam
            </p>
            <p className="origin-left scale-90">Album • 2017</p>
          </div>
        </motion.button>
        <div className="flex h-full w-full max-w-2xl flex-grow flex-col p-2">
          <div className="flex items-center justify-center gap-2">
            <Toggle className="h-10 w-10 cursor-pointer rounded-full focus-visible:ring-0">
              <Icon.Shuffle className="h-4 w-4" />
            </Toggle>
            <Button variant="ghost" size="sm" className="h-10 w-10 cursor-pointer rounded-full focus-visible:ring-0">
              <Icon.SkipBack className="h-4 w-4 fill-white" />
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
                <Icon.Play className="h-6 w-6" />
              )}
            </Button>
            <Button variant="ghost" size="sm" className="h-10 w-10 cursor-pointer rounded-full focus-visible:ring-0">
              <Icon.SkipForward className="h-4 w-4 fill-white" />
            </Button>
            <Toggle className="h-10 w-10 cursor-pointer rounded-full focus-visible:ring-0">
              <Icon.Repeat className="h-4 w-4" />
            </Toggle>
          </div>
          <div className="mt-2 flex gap-2">
            <span>1:33</span>
            <Slider defaultValue={[33]} max={100} step={1} thumbColor={color} />
            <span>3:59</span>
          </div>
        </div>
        <div className="hidden h-full w-full max-w-xs md:flex">
          <div className="flex w-full items-center justify-end p-2">
            <Toggle
              pressed={volume < 0}
              onPressedChange={handleMuteChange}
              className="h-10 w-10 cursor-pointer rounded-full p-0 focus-visible:ring-0"
            >
              {volume <= 0 ? (
                <Icon.VolumeOff className="h-5 w-5" />
              ) : volume >= 1 && volume <= 33 ? (
                <Icon.Volume className="h-5 w-5" />
              ) : volume >= 34 && volume <= 66 ? (
                <Icon.Volume1 className="h-5 w-5" />
              ) : (
                <Icon.Volume2 className="h-5 w-5" />
              )}
            </Toggle>
            <div className="w-1/2 px-4">
              <Slider
                step={1}
                max={100}
                thumbColor={color}
                defaultValue={[volume]}
                onValueChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaControls;
