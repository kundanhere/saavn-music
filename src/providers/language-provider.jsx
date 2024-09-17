import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Initial state for the language context.
 */
const initialState = {
  lang: 'hindi',
  setLanguage: () => null,
};

/**
 * A React context provider component for managing the application's language state.
 * It provides a context object with the current language and a function to update it.
 * The language state is persisted in the browser's local storage.
 */
const LanguageProviderContext = createContext(initialState);

export const LanguageProvider = ({ children, defaultLang = 'hindi', storageKey = 'saavn-music-lang', ...props }) => {
  const [lang, setLang] = useState(() => localStorage.getItem(storageKey) || defaultLang);

  // Update the language when the language changes.
  useEffect(() => {
    const musicLang = lang === 'hindi' ? 'hindi' : 'english';
    setLang(musicLang);
  }, [lang]);

  // Create a value object containing the current language and a setter function to update it.
  const value = {
    lang,
    setLang: (lang) => {
      localStorage.setItem(storageKey, lang);
      setLang(lang);
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
};

/**
 * A React  context consumer to retrieve the current language state from the LanguageProvider context.
 * @returns {Object} An object containing the current language and a setter function to update it.
 * @throws {Error} Throws an error if the hook is not used within a LanguageProvider.
 */
export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
};
