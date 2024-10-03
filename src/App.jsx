import { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import MediaControls from '@/components/custom/media-controls';
import LoadingSpinner from '@/components/custom/skeletons/loading-spinner';
import SkeletonNavbar from '@/components/custom/skeletons/navbar';
import SkeletonSidebar from '@/components/custom/skeletons/sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';

const AlbumPage = lazy(() => import('@/pages/album-page'));
const ArtistPage = lazy(() => import('@/pages/artist-page'));
const DetailsPage = lazy(() => import('@/pages/details-page'));
const HomePage = lazy(() => import('@/pages/home-page'));
const Navbar = lazy(() => import('@/components/custom/navigations/navbar'));
const NoPage = lazy(() => import('@/pages/page-404'));
const Sidebar = lazy(() => import('@/components/custom/navigations/sidebar'));
const SongPage = lazy(() => import('@/pages/song-page'));

/**
 * The main App component that renders the application's layout and routes.
 * It includes a resizable sidebar, a main content area with routes, and a media controls bar at the bottom.
 */
function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Navbar */}
      <Suspense fallback={<SkeletonNavbar />}>
        <Navbar />
      </Suspense>
      <ResizablePanelGroup direction="horizontal" className="h-full w-screen border">
        <ResizablePanel defaultSize={20} minSize={16} maxSize={25} className="hidden lg:block">
          <ScrollArea className="flex max-h-[calc(100vh-3.2rem)] min-h-[calc(100vh-3.2rem)] flex-col">
            {/* Sidebar */}
            <Suspense fallback={<SkeletonSidebar />}>
              <Sidebar />
            </Suspense>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <ScrollArea className="flex max-h-[calc(100vh-3.2rem)] min-h-[calc(100vh-3.2rem)] flex-col p-6 pb-0">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Add app routes here */}
                <Route path="/" element={<HomePage />} />
                <Route path="/songs" element={<SongPage />} />
                <Route path="/albums" element={<AlbumPage />} />
                <Route path="/artists" element={<ArtistPage />} />
                <Route path="/details/:type/:id" element={<DetailsPage />} />
                <Route path="/*" element={<NoPage />} />
              </Routes>
            </Suspense>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="absolute -left-1 bottom-0 right-0 z-50 flex h-28 w-[101%] items-center justify-evenly text-white ring-1 ring-inset ring-[#bebebe80] ring-offset-0 ring-offset-white backdrop-blur-3xl dark:ring-[#454e5d80]">
        {/* Media transport controls */}
        <MediaControls />
      </div>
    </div>
  );
}

export default App;
