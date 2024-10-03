import { useState } from 'react';

/**
 * A custom React hook that provides media controls functionality, including volume adjustment and play/pause state.
 *
 * @returns {Object} An object containing the following properties and methods:
 *   - `volume`: The current volume level, between 0 and 100.
 *   - `isPlaying`: A boolean indicating whether the media is currently playing.
 *   - `setIsPlaying`: A function to set the `isPlaying` state.
 *   - `handleMuteChange`: A function to toggle the volume between the current value and its negative.
 *   - `handleVolumeChange`: A function to adjust the volume to the specified value, between 0 and 100.
 */
const useMediaControls = () => {
  const [volume, setVolume] = useState(35);
  const [isPlaying, setIsPlaying] = useState(false);

  /**
   * Adjusts the volume to the specified value.
   * @param {number} value - The new volume value, between 0 and 100.
   */
  const handleVolumeChange = (value) => {
    setVolume(value[0]);
  };

  /**
   * Toggles the volume between the current value and its negative.
   */
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
