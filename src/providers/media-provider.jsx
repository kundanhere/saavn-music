import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Initial state for the media context.
 */
const initialState = {
  currSong: '67d1h4XH',
  setCurrSong: (id) => {},
};

/**
 * A React context provider component for managing the application's current song state.
 * It provides a context object with the current song and a function to update it.
 * The song state is persisted in the browser's local storage.
 */
const MediaProviderContext = createContext(initialState);

export const MediaProvider = ({ children, defaultMedia = '67d1h4XH', storageKey = 'saavn-music', ...props }) => {
  const [song, setSong] = useState(() => localStorage.getItem(storageKey) || defaultMedia);

  // Update the media when the song changes.
  useEffect(() => {
    setSong(song);
  }, [song]);

  // Create a value object containing the current song and a setter function to update it.
  const value = {
    song,
    setSong: (song) => {
      localStorage.setItem(storageKey, song);
      setSong(song);
    },
  };

  return (
    <MediaProviderContext.Provider {...props} value={value}>
      {children}
    </MediaProviderContext.Provider>
  );
};

/**
 * A React  context consumer to retrieve the current song state from the MediaProvider context.
 * @returns {Object} An object containing the current song and a setter function to update it.
 * @throws {Error} Throws an error if the hook is not used within a MediaProvider.
 */
export const useMedia = () => {
  const context = useContext(MediaProviderContext);

  if (context === undefined) throw new Error('useMedia must be used within a MediaProvider');

  return context;
};
