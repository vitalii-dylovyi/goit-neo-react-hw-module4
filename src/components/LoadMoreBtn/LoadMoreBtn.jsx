import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoad }) => {
  return (
    <div className={styles['load-more-block']}>
      <button onClick={onLoad} className={styles['load-more']}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
