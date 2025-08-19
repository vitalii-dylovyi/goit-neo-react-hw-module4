import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      shouldCloseOnEsc
      onRequestClose={onClose}
      contentLabel='Image Modal'
      style={{ content: { padding: 0, inset: 80, overflow: 'hidden' } }}
    >
      {image && <img src={image.urls.regular} className={styles['image-full']} />}
    </Modal>
  );
};

export default ImageModal;
