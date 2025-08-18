import { SearchIcon } from 'lucide-react';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form.elements.search.value;
    if (!searchValue) {
      toast('Please enter something to search!', { icon: '⚠️' });
      return;
    }

    onSubmit(searchValue);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type='text'
          name='search'
          autoComplete='off'
          placeholder='Search images and photos'
        />
        <button type='submit'>
          <SearchIcon color='grey' />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
