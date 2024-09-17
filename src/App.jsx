import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/providers/theme-provider';
import { LanguageProvider } from '@/providers/language-provider';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import MediaControls from '@/components/custom/media-controls';
import Navbar from '@/components/custom/navbar';
import Sidebar from '@/components/custom/sidebar';
import HomePage from '@/pages/home-page';
import SongPage from '@/pages/song-page';
import Page404 from '@/pages/page-404';

function App() {
  return (
    <ThemeProvider storageKey="saavn-music-theme">
      <LanguageProvider storageKey="saavn-music-lang">
        <div className="relative overflow-x-hidden">
          <Navbar />
          <ResizablePanelGroup direction="horizontal" className="border w-screen h-full">
            <ResizablePanel defaultSize={20} minSize={16} maxSize={25} className="hidden lg:block">
              <ScrollArea className="flex flex-col min-h-[calc(100vh-3.2rem)] max-h-[calc(100vh-3.2rem)]">
                {/* Sidebar */}
                <Sidebar />
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={80}>
              <ScrollArea className="flex flex-col min-h-[calc(100vh-3.2rem)] max-h-[calc(100vh-3.2rem)] p-6 pb-0">
                <Routes>
                  {/* Add app routes here */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/songs" element={<SongPage />} />
                  <Route path="/*" element={<Page404 />} />
                </Routes>
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
          <div className="absolute bottom-0 right-0 -left-1 z-50 w-[101%] h-20 backdrop-blur-3xl flex items-center justify-evenly bg-black/30 text-white ring-1 ring-inset ring-offset-0 ring-offset-white ring-[#bebebe80] dark:ring-[#454e5d80]">
            {/* Media transport controls */}
            <MediaControls />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
