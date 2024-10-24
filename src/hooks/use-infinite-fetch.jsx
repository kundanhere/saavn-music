import { useEffect } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

import { fetchInfintieArtistSongs, fetchInfintieItems, fetchInfintiePlaylistItems } from '@/services/api/jio-saavn';

/**
 * A custom React hook that provides an infinite scrolling functionality using the `useInfiniteQuery` hook from `@tanstack/react-query`.
 *
 * This hook fetches an infinite list of items from an API endpoint, and automatically fetches the next page of data when the user scrolls to the bottom of the page.
 *
 * @param {string} [query='hindi'] - The search query to use for fetching the items.
 * @param {string} [queryType='songs'] - The type of items to fetch (e.g. 'songs', 'albums', artists', etc.).
 * @param {number} [pageSize=10] - The number of items to fetch per page.
 * @returns {object} - An object containing the fetched data, loading state, error state, and a ref to observe when the user scrolls to the bottom of the page.
 */
const useInfiniteFetch = (query = 'hindi', queryType = 'songs', pageSize = 10) => {
  // Fetches an infinite list of items using the `useInfiniteQuery` hook from `@tanstack/react-query`.
  const { data, isPending, error, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: [`infinite${queryType}`, query],
    queryFn: async ({ pageParam }) => await fetchInfintieItems({ query, queryType, pageSize, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.nextPage !== null ? lastPage.nextPage : null),
  });

  /**
   * Refetches the infinite query when the `query` or `refetch` dependencies change.
   *
   * This effect is used to ensure that the infinite query is refetched whenever the search query or the refetch function changes.
   * This is necessary to update the displayed data when the user changes the search query.
   */
  useEffect(() => {
    refetch();
  }, [query, refetch]);

  // Observes when the user scrolls to the bottom of the page and fetches the next page if available.
  const { ref, inView } = useInView();

  // Fetches the next page when the user scrolls to the bottom of the page.
  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [hasNextPage, inView, fetchNextPage]);

  // Returns the fetched data, loading state, error state, and a ref to observe when the user scrolls to the bottom of the page.
  return {
    data,
    isPending,
    error,
    isFetchingNextPage,
    ref,
  };
};

export default useInfiniteFetch;

/**
 * A custom React hook that provides an infinite scrolling functionality for fetching playlist items using the `useInfiniteQuery` hook from `@tanstack/react-query`.
 *
 * This hook fetches an infinite list of playlist items from an API endpoint, and automatically fetches the next page of data when the user scrolls to the bottom of the page.
 *
 * @param {string} id - The ID of the playlist to fetch items for.
 * @param {number} [pageSize=10] - The number of items to fetch per page.
 * @returns {object} - An object containing the fetched data, loading state, error state, and a ref to observe when the user scrolls to the bottom of the page.
 */
export const useInfintieFetchPlaylistItems = (id, pageSize = 10) => {
  // Fetches an infinite list of items using the `useInfiniteQuery` hook from `@tanstack/react-query`.
  const { data, isPending, error, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['infinitePlaylistItems', id],
    queryFn: async ({ pageParam }) => await fetchInfintiePlaylistItems({ id, pageSize, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.nextPage !== null ? lastPage.nextPage : null),
  });

  /**
   * Refetches the infinite query when the `id` or `refetch` dependencies change.
   *
   * This effect is used to ensure that the infinite query is refetched whenever the playlist id or the refetch function changes.
   * This is necessary to update the displayed data when the user changes the search query.
   */
  useEffect(() => {
    refetch();
  }, [id, refetch]);

  // Observes when the user scrolls to the bottom of the page and fetches the next page if available.
  const { ref, inView } = useInView();

  // Fetches the next page when the user scrolls to the bottom of the page.
  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [hasNextPage, inView, fetchNextPage]);

  // Returns the fetched data, loading state, error state, and a ref to observe when the user scrolls to the bottom of the page.
  return {
    data,
    isPending,
    error,
    isFetchingNextPage,
    ref,
  };
};

/**
 * A custom React hook that provides an infinite scrolling functionality for fetching artist songs using the `useInfiniteQuery` hook from `@tanstack/react-query`.
 *
 * This hook fetches an infinite list of artist songs from an API endpoint, and automatically fetches the next page of data when the user scrolls to the bottom of the page.
 *
 * @param {string} id - The ID of the artist to fetch songs for.
 * @param {number} [pageSize=10] - The number of songs to fetch per page.
 * @returns {object} - An object containing the fetched data, loading state, error state, and a ref to observe when the user scrolls to the bottom of the page.
 */
export const useInfintieFetchArtistSongs = (id, pageSize = 10) => {
  // Fetches an infinite list of items using the `useInfiniteQuery` hook from `@tanstack/react-query`.
  const { data, isPending, error, hasNextPage, isFetchingNextPage, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['infiniteArtistSongs', id],
    queryFn: async ({ pageParam }) => await fetchInfintieArtistSongs({ id, pageSize, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.nextPage !== null ? lastPage.nextPage : null),
  });

  /**
   * Refetches the infinite query when the `id` or `refetch` dependencies change.
   *
   * This effect is used to ensure that the infinite query is refetched whenever the artist id or the refetch function changes.
   * This is necessary to update the displayed data when the user changes the search query.
   */
  useEffect(() => {
    refetch();
  }, [id, refetch]);

  // Observes when the user scrolls to the bottom of the page and fetches the next page if available.
  const { ref, inView } = useInView();

  // Fetches the next page when the user scrolls to the bottom of the page.
  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [hasNextPage, inView, fetchNextPage]);

  // Returns the fetched data, loading state, error state, and a ref to observe when the user scrolls to the bottom of the page.
  return {
    data,
    isPending,
    error,
    isFetchingNextPage,
    ref,
  };
};
