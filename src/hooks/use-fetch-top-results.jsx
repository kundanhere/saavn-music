import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchTopResults } from '@/services/api/jio-saavn';

/**
 * A React hook that fetches the top results for a given query.
 *
 * @param {string} query - The search query to fetch top results for.
 * @returns {object} - An object containing the fetched data, any pending status, and any errors that occurred during the fetch.
 */
const useFetchTopResults = (query) => {
  // Fetch initial data
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['popular', { query: query }],
    queryFn: async () => await fetchTopResults(query),
  });

  // Refetches the popular data when the language changes.
  useEffect(() => {
    refetch();
  }, [query, refetch]);
  return {
    isPending,
    error,
    data,
  };
};

export default useFetchTopResults;
