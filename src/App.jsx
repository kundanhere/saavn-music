import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/providers/theme-provider';
import { LanguageProvider } from '@/providers/language-provider';
import { ScrollArea } from '@/components/ui/scroll-area';
import Navbar from '@/components/custom/navbar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import HomePage from './pages/home-page';
import SongPage from './pages/song-page';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="saavn-music-theme">
      <LanguageProvider defaultLang="english" storageKey="saavn-music-lang">
        <div className="relative">
          <Navbar />
          <ResizablePanelGroup direction="horizontal" className="border w-screen h-full">
            <ResizablePanel defaultSize={20} minSize={16} maxSize={25}>
              <ScrollArea className="flex flex-col min-h-[calc(100vh-3.2rem)] max-h-[calc(100vh-3.2rem)] items-center justify-center p-6">
                <h3 className="font-semibold text-center mb-24">Sidebar</h3>
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={80}>
              <ScrollArea className="flex flex-col min-h-[calc(100vh-3.2rem)] max-h-[calc(100vh-3.2rem)] p-6 pb-0">
                <Routes>
                  {/* Add your routes here */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/songs" element={<SongPage />} />
                </Routes>
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
          <div className="absolute bottom-0 right-0 left-0 z-50 h-20 border w-screen backdrop-blur-lg flex items-center justify-center">
            Media Controller
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
