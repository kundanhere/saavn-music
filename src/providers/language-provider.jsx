import { createContext, useContext, useEffect, useState } from 'react';

const initialState = {
  lang: 'hindi',
  setLanguage: () => null,
};

const LanguageProviderContext = createContext(initialState);

export const LanguageProvider = ({ children, defaultLang = 'system', storageKey = 'saavn-music-lang', ...props }) => {
  const [lang, setLang] = useState(() => localStorage.getItem(storageKey) || defaultLang);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('hindi', 'english');

    if (lang !== undefined) {
      const musicLang = lang === 'hindi' ? 'hindi' : 'english';

      root.classList.add(musicLang);
      return;
    }

    root.classList.add(lang);
  }, [lang]);

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

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
};
