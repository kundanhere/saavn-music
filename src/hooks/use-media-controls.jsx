import { useState } from 'react';

const useMediaControls = () => {
  const [volume, setVolume] = useState(35);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVolumeChange = (value) => {
    setVolume(value[0]);
  };

  const handleMuteChange = () => {
    setVolume((prev) => prev * -1);
  };

  return {
    volume,
    isPlaying,
    setIsPlaying,
    handleMuteChange,
    handleVolumeChange,
  };
};

export default useMediaControls;
