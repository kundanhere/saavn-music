import axios from 'axios';

// Create a new instance of Axios
const api = axios.create({
  baseURL: 'https://jiosaavn-api-jade.vercel.app/api', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fetches songs from the JioSaavn API based on the provided search query.
 */
export const fetchSongsByQuery = async (query) => {
  try {
    const response = await api.get(`/search/songs?query=${query}`);
    return response.status === 200 ? response.data.data : response.data.message;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches albums from the JioSaavn API based on the provided search query.
 */
export const fetchAlbumsByQuery = async (query) => {
  try {
    const response = await api.get(`/search/albums?query=${query}`);
    return response.status === 200 ? response.data.data : response.data.message;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches artists from the JioSaavn API based on the provided search query.
 *
 * @param {string} [query='artist'] - The search query to use for fetching artists. Defaults to 'artist' if not provided.
 * @returns {Promise<any[]>} - An array of artist search results.
 */
export const fetchArtistsByQuery = async (query = 'artist') => {
  try {
    const response = await api.get(`/search/artists?query=${query}`);
    return response.status === 200 ? response.data.data : response.data.message;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches playlists from the JioSaavn API based on the provided search query.
 */
export const fetchPlaylistsByQuery = async (query) => {
  try {
    const response = await api.get(`/search/playlists?query=${query}`);
    return response.status === 200 ? response.data.data : response.data.message;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches details for a song by its ID.
 */
export const fetchSongDetailsById = async (id) => {
  try {
    const response = await api.get(`/songs/${id}`);
    return response.status === 200 ? response.data.data[0] : response.data.message;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches details for a Album by its ID.
 */
export const fetchAlbumDetailsById = async (id) => {
  try {
    const response = await api.get(`/albums?id=${id}`);
    return response.status === 200 ? response.data.data : response.data.message;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches details for a playlist by its ID.
 */
export const fetchPlaylistDetailsById = async (id = '1167751266') => {
  try {
    const response = await api.get(`/playlists?id=${id}`);
    return response.status === 200 ? response.data.data : response.data.message;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches details for a artist by its ID.
 */
export const fetchArtistDetailsById = async (id = '1167751266') => {
  try {
    const response = await api.get(`/artists/${id}`);
    return response.status === 200 ? response.data.data : response.data.message;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches top search results from the JioSaavn API based on the provided query.
 *
 * @param {string} query - The search query to use for fetching top results.
 * @returns {Promise<{ songs: any[], albums: any[], playlists: any[], artists: any[] }>} - An object containing the top search results for songs, albums, playlists, and artists.
 */
export const fetchTopResults = async (query) => {
  try {
    const songs = await fetchSongsByQuery(`${new Date().getFullYear()} ${query}`);
    const albums = await fetchAlbumsByQuery(`${query} album`);
    const playlists = await fetchPlaylistsByQuery(`${query} playlist`);
    const artists = await fetchArtistsByQuery();

    return { songs, albums, playlists, artists };
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches search results from the JioSaavn API based on the provided query.
 */
export const fetchSearchResults = async (query) => {
  try {
    const response = await api.get(`/search?&query=${query}`);
    return response.status === 200 ? response.data.data : response.data.message;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches a paginated set of search results from the JioSaavn API based on the provided query, query type, page size, and page parameter.
 *
 * @param {object} params - An object containing the search parameters.
 * @param {string} params.query - The search query to use.
 * @param {string} params.queryType - The type of search to perform (e.g. "songs", "artists", "albums").
 * @param {number} params.pageSize - The number of results to fetch per page.
 * @param {number} params.pageParam - The page number to fetch.
 * @returns {Promise<{ data: any[], currentPage: number, nextPage: number|null }>} - An object containing the search results, the current page, and the next page (or null if there are no more pages).
 */
export const fetchInfintieItems = async ({ query, queryType, pageSize, pageParam }) => {
  // Initialize the response object
  let res = {
    data: null,
    currentPage: pageParam,
    nextPage: null,
  };

  try {
    // Fetch the first page of either the songs, artists or albums based on the query type
    const response = await api.get(`/search/${queryType}?query=${query}&page=${pageParam}&limit=${pageSize}`);
    if (response.status === 200) {
      (res.data = response.data.data),
        (res.currentPage = pageParam),
        // Calculate the next page based on the start index and total count
        (res.nextPage = response.data.data.start + pageSize < response.data.data.total ? pageParam + 1 : null);
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches a paginated set of playlist song items from the JioSaavn API based on the provided playlist ID, page size, and page parameter.
 *
 * @param {object} params - An object containing the playlist parameters.
 * @param {string} params.id - The ID of the playlist to fetch.
 * @param {number} params.pageSize - The number of results to fetch per page.
 * @param {number} params.pageParam - The page number to fetch.
 * @returns {Promise<{ data: any[], currentPage: number, nextPage: number|null }>} - An object containing the playlist song items, the current page, and the next page (or null if there are no more pages).
 */
export const fetchInfintiePlaylistItems = async ({ id, pageSize, pageParam }) => {
  // Initialize the response object
  let res = {
    data: null,
    currentPage: pageParam,
    nextPage: null,
  };

  try {
    // Fetch the first page of playlist's song item
    const response = await api.get(`/playlists?id=${id}&page=${pageParam}&limit=${pageSize}`);
    if (response.status === 200) {
      (res.data = response.data.data),
        (res.currentPage = pageParam),
        // Calculate the next page based on the start index and total count
        (res.nextPage = response.data.data.songCount + pageSize < 50 ? pageParam + 1 : null);
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Fetches a paginated set of songs for a given artist from the JioSaavn API based on the provided artist ID, page size, and page parameter.
 *
 * @param {object} params - An object containing the artist parameters.
 * @param {string} params.id - The ID of the artist to fetch songs for.
 * @param {number} params.pageSize - The number of results to fetch per page.
 * @param {number} params.pageParam - The page number to fetch.
 * @returns {Promise<{ data: any[], currentPage: number, nextPage: number|null }>} - An object containing the artist's songs, the current page, and the next page (or null if there are no more pages).
 */
export const fetchInfintieArtistSongs = async ({ id, pageSize, pageParam }) => {
  // Initialize the response object
  let res = {
    data: null,
    currentPage: pageParam,
    nextPage: null,
  };

  try {
    // Fetch the first page of artist's songs
    const response = await api.get(
      `/artists/${id}?page=${pageParam}&songCount=${pageSize}&sortBy=latest&sortOrder=desc`
    );
    if (response.status === 200) {
      (res.data = response.data.data),
        (res.currentPage = pageParam),
        // Calculate the next page based on the start index and total count
        (res.nextPage = response.data.data.topSongs.length + pageSize < 500 ? pageParam + 1 : null);
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};
