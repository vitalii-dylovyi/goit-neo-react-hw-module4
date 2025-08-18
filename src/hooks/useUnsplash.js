import { useState } from 'react';
import { unsplashApiClient } from '../assets/plugins/unsplashApiClient';

const useUnsplash = () => {
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState();

  const fetchPhotosByQuery = async (query, page = 1) => {
    try {
      setLoading(true);
      setPage(page);
      setSearchQuery(query);
      const res = await unsplashApiClient.get('search/photos', {
        params: {
          page,
          query,
          per_page: 12,
        },
      });

      setTotalPages(res.data.total_pages);

      return res.data.results;
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadPhotos = async (query, page = 1) => {
    const newPhotos = await fetchPhotosByQuery(query, page);
    setPhotos(newPhotos);
  };

  const loadMorePhotos = async () => {
    const morePhotos = await fetchPhotosByQuery(searchQuery, page + 1);
    console.log('morePhotos', morePhotos);
    setPhotos((prev) => prev.concat(morePhotos));
  };

  return {
    page,
    error,
    photos,
    loading,
    totalPages,
    loadPhotos,
    loadMorePhotos,
  };
};

export default useUnsplash;
