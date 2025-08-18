import { Toaster } from 'react-hot-toast';

import './App.css';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import ImageModal from './components/ImageModal';
import ErrorMessage from './components/ErrorMessage';
import ImageGallery from './components/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import useUnsplash from './hooks/useUnsplash';
import { useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState();
  const { page, error, photos, loading, totalPages, loadPhotos, loadMorePhotos } =
    useUnsplash();

  const handleSubmit = (query) => {
    loadPhotos(query, 1);
  };

  const handleCloseModal = () => {
    setSelectedImage(undefined);
  };

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={photos} onSelectImage={setSelectedImage} />
      )}
      {photos.length && page < totalPages && !loading ? (
        <LoadMoreBtn onLoad={loadMorePhotos} />
      ) : null}
      {loading && <Loader />}
      {/* <Loader /> */}
      <ImageModal
        image={selectedImage}
        onClose={handleCloseModal}
      />
      <Toaster position='top-right' />
    </main>
  );
}

export default App;
