import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Default state for the theme context.
 */
const initialState = {
  theme: 'system',
  setTheme: () => null,
};

/**
 * A React context provider component for managing the theme of an application.
 * It provides a context for child components to access and update the theme.
 */
const ThemeProviderContext = createContext(initialState);

export const ThemeProvider = ({ children, defaultTheme = 'system', storageKey = 'saavn-music-theme', ...props }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);

  // Update the theme class based on the current theme state and system preferences.
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  // Return the theme context value and the setTheme function.
  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

/**
 * A React context consumer component for accessing and updating the theme.
 * It fetches the theme context value and provides a way to update the theme.
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
