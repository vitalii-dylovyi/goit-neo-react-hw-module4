import Modal from 'react-modal';

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      shouldCloseOnEsc
      style={{ content: { padding: 0, inset: 80 } }}
      onRequestClose={onClose}
      contentLabel='Image Modal'
    >
      {image && <img src={image.urls.regular} style={{ minWidth: '100%' }} />}
    </Modal>
  );
};

export default ImageModal;
