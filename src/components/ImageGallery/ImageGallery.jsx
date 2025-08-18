import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onSelectImage }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={styles['gallery-item']}
          onClick={() => onSelectImage(image)}
        >
          <div>
            <img src={image.urls.small} alt='' className={styles['gallery-image']} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
