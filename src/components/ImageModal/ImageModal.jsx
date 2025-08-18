import Modal from 'react-modal';

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      shouldCloseOnEsc
      style={{ content: { padding: 0, inset: 80, overflow: 'hidden' } }}
      onRequestClose={onClose}
      contentLabel='Image Modal'
    >
      {image && <img src={image.urls.regular} style={{ minWidth: '100%', height: '100%', objectFit: 'contain' }} />}
    </Modal>
  );
};

export default ImageModal;
