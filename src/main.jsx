import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './app.jsx';
import './index.css';
import { LanguageProvider } from './providers/language-provider.jsx';
import { MediaProvider } from './providers/media-provider.jsx';
import { ThemeProvider } from './providers/theme-provider.jsx';

// Create a new query client
const queryClient = new QueryClient();

/**
 * Renders the main application component wrapped in the necessary providers for theme, language, and media context.
 */
createRoot(document.getElementById('root')).render(
  // Wrap the application in the QueryClientProvider
  <QueryClientProvider client={queryClient}>
    <ThemeProvider storageKey="saavn-music-theme">
      <LanguageProvider storageKey="saavn-music-lang">
        <MediaProvider storageKey="saavn-music">
          <App />
        </MediaProvider>
      </LanguageProvider>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
