import { Route, Routes } from 'react-router-dom';

import AlbumPage from '@/pages/album-page';
import ArtistPage from '@/pages/artist-page';
import DetailsPage from '@/pages/details-page';
import HomePage from '@/pages/home-page';
import Page404 from '@/pages/page-404';
import SongPage from '@/pages/song-page';

import MediaControls from '@/components/custom/media-controls';
import Navbar from '@/components/custom/navbar';
import Sidebar from '@/components/custom/sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';

import { LanguageProvider } from '@/providers/language-provider';
import { ThemeProvider } from '@/providers/theme-provider';

function App() {
  return (
    <ThemeProvider storageKey="saavn-music-theme">
      <LanguageProvider storageKey="saavn-music-lang">
        <div className="relative overflow-x-hidden">
          <Navbar />
          <ResizablePanelGroup direction="horizontal" className="h-full w-screen border">
            <ResizablePanel defaultSize={20} minSize={16} maxSize={25} className="hidden lg:block">
              <ScrollArea className="flex max-h-[calc(100vh-3.2rem)] min-h-[calc(100vh-3.2rem)] flex-col">
                {/* Sidebar */}
                <Sidebar />
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={80}>
              <ScrollArea className="flex max-h-[calc(100vh-3.2rem)] min-h-[calc(100vh-3.2rem)] flex-col p-6 pb-0">
                <Routes>
                  {/* Add app routes here */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/songs" element={<SongPage />} />
                  <Route path="/albums" element={<AlbumPage />} />
                  <Route path="/artists" element={<ArtistPage />} />
                  <Route path="/details/:id" element={<DetailsPage />} />
                  <Route path="/*" element={<Page404 />} />
                </Routes>
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
          <div className="absolute -left-1 bottom-0 right-0 z-50 flex h-28 w-[101%] items-center justify-evenly text-white ring-1 ring-inset ring-[#bebebe80] ring-offset-0 ring-offset-white backdrop-blur-3xl dark:ring-[#454e5d80]">
            {/* Media transport controls */}
            <MediaControls />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
