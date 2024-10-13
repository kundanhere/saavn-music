import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layout';

const AlbumPage = lazy(() => import('@/pages/album-page'));
const ArtistPage = lazy(() => import('@/pages/artist-page'));
const AlbumDetailsPage = lazy(() => import('@/pages/album-details-page'));
const ArtistDetailsPage = lazy(() => import('@/pages/artist-details-page'));
const HomePage = lazy(() => import('@/pages/home-page'));
const NoPage = lazy(() => import('@/pages/page-404'));
const PlaylistDetailsPage = lazy(() => import('@/pages/playlist-details-page'));
const SongDetailsPage = lazy(() => import('@/pages/song-details-page'));
const SongPage = lazy(() => import('@/pages/song-page'));

/**
 * Creates a browser router with the following routes:
 * - Home page (/)
 * - Songs page (/songs)
 * - Albums page (/albums)
 * - Artists page (/artists)
 * - Song details page (/details/song/:id)
 * - Album details page (/details/album/:id)
 * - Artist details page (/details/artist/:id)
 * - Playlist details page (/details/playlist/:id)
 * - 404 page (/*)
 *
 * The root layout component `RootLayout` is used as the main layout for all routes.
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
        path: '/details/song/:id',
        element: <SongDetailsPage />,
      },
      {
        path: '/details/album/:id',
        element: <AlbumDetailsPage />,
      },
      {
        path: '/details/artist/:id',
        element: <ArtistDetailsPage />,
      },
      {
        path: '/details/playlist/:id',
        element: <PlaylistDetailsPage />,
      },
      {
        path: '/*',
        element: <NoPage />,
      },
    ],
  },
]);

export default router;
