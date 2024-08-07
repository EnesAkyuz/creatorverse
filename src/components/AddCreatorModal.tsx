import React from 'react';
import Modal from 'react-modal';
import AddCreator from './AddCreator';

Modal.setAppElement('#root'); // This is important for accessibility

interface AddCreatorModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string | null;
}

const AddCreatorModal: React.FC<AddCreatorModalProps> = ({ isOpen, onRequestClose, id }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Creator"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '600px',
          width: '100%',
        },
      }}
    >
      <AddCreator id={id} />
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AddCreatorModal;
