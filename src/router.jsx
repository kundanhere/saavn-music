import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layout';

const AlbumPage = lazy(() => import('@/pages/album-page'));
const ArtistPage = lazy(() => import('@/pages/artist-page'));
const DetailsPage = lazy(() => import('@/pages/details-page'));
const AlbumDetailsPage = lazy(() => import('@/pages/album-details-page'));
const HomePage = lazy(() => import('@/pages/home-page'));
const NoPage = lazy(() => import('@/pages/page-404'));
const SongPage = lazy(() => import('@/pages/song-page'));

/**
 * Creates a browser router with the following routes:
 * - Home page at '/'
 * - Songs page at '/songs'
 * - Albums page at '/albums'
 * - Artists page at '/artists'
 * - Album details page at '/details/album/:id'
 * - Details page at '/details/:type/:id'
 * - 404 page at '/*'
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/songs',
        element: <SongPage />,
      },
      {
        path: '/albums',
        element: <AlbumPage />,
      },
      {
        path: '/artists',
        element: <ArtistPage />,
      },
      {
        path: '/details/album/:id',
        element: <AlbumDetailsPage />,
      },
      {
        path: '/details/:type/:id',
        element: <DetailsPage />,
      },
      {
        path: '/*',
        element: <NoPage />,
      },
    ],
  },
]);

export default router;
