import { Suspense, lazy } from 'react';

import { Outlet } from 'react-router-dom';

import Error from '@/components/custom/error';
import ErrorBoundary from '@/components/custom/error-boundary';
import MediaControls from '@/components/custom/media-controls';
import SkeletonNavbar from '@/components/custom/skeletons/navbar';
import SkeletonSidebar from '@/components/custom/skeletons/sidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';

const Navbar = lazy(() => import('@/components/custom/navigations/navbar'));
const Sidebar = lazy(() => import('@/components/custom/navigations/sidebar'));

/**
 * The `RootLayout` component is the main layout component for the application.
 * It renders the Navbar, Sidebar, and the main content area where the application routes are displayed.
 *
 * The layout is designed to be responsive, with the Sidebar being hidden on smaller screens and a resizable panel layout on larger screens.
 * The layout also includes a media controls component at the bottom of the screen, which provides controls for media playback.
 */
const RootLayout = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Navbar */}
      <ErrorBoundary fallback={<Error msg={'Failed to load Navbar items.'} />}>
        <Suspense fallback={<SkeletonNavbar />}>
          <Navbar />
        </Suspense>
      </ErrorBoundary>
      <ResizablePanelGroup direction="horizontal" className="h-full w-screen border">
        <ResizablePanel defaultSize={20} minSize={16} maxSize={25} className="hidden lg:block">
          <ScrollArea className="flex max-h-[calc(100vh-3.2rem)] min-h-[calc(100vh-3.2rem)] flex-col">
            {/* Sidebar */}
            <ErrorBoundary fallback={<Error msg={'Failed to load Sidebar navigation.'} />}>
              <Suspense fallback={<SkeletonSidebar />}>
                <Sidebar />
              </Suspense>
            </ErrorBoundary>
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <ScrollArea className="flex max-h-[calc(100vh-3.2rem)] min-h-[calc(100vh-3.2rem)] flex-col p-6 pb-0">
            {/* App routes */}
            <Outlet />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="absolute -left-1 bottom-0 right-0 z-50 flex h-28 w-[101%] items-center justify-evenly text-white ring-1 ring-inset ring-[#bebebe80] ring-offset-0 ring-offset-white backdrop-blur-3xl dark:ring-[#454e5d80]">
        {/* Media transport controls */}
        <MediaControls />
      </div>
    </div>
  );
};

export default RootLayout;
