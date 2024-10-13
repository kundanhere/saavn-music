import { useCallback, useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import useColors from '@/hooks/use-colors';

import { fetchSongDetailsByQuery } from '@/services/api/jio-saavn';

import { useMedia } from '@/providers/media-provider';

import CurrentMediaInfo from './controls/current-media-info-button';
import PlayControl from './controls/play-control';
import RepeatControl from './controls/repeat-control';
import ShuffleControl from './controls/shuffle-control';
import TimelineControl from './controls/timeline-control';
import VolumeControl from './controls/volume-control';
import Error from './error';
import SkeletonCurrentMediaInfo from './skeletons/current-media-info';

const MediaControls = () => {
  const { song } = useMedia();
  const { color, putColor } = useColors();

  // Fetch initial data
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['currentSong', song],
    queryFn: async () => await fetchSongDetailsByQuery('song', song),
  });

  // Refetches the song when the song id changes.
  useEffect(() => {
    refetch();
  }, [song]);

  // Update color on data change
  useCallback(putColor(data?.image[0].url), [data, putColor]);

  // Render error message if any
  if (error) return <Error msg={`Failed to load media controls. ${error.message}`} className="bg-yellow-300" />;

  return (
    <div
      className="relative flex h-full w-full items-center justify-evenly text-center"
      style={{ backgroundColor: `${color}4d` /* 4d -> means opacity 0.3*/ }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-black/30 dark:bg-white/30" />
      <div className="relative z-10 flex h-full w-full items-start justify-center px-1 md:justify-between">
        {isPending ? <SkeletonCurrentMediaInfo /> : <CurrentMediaInfo data={data} />}
        <div className="flex h-full w-full max-w-2xl flex-grow flex-col p-2">
          <div className="flex items-center justify-center gap-2">
            <ShuffleControl />
            <PlayControl />
            <RepeatControl />
          </div>
          <TimelineControl media={data} thumbColor={color} />
        </div>
        <div className="hidden h-full w-full max-w-xs md:flex">
          <VolumeControl thumbColor={color} />
        </div>
      </div>
    </div>
  );
};

export default MediaControls;
