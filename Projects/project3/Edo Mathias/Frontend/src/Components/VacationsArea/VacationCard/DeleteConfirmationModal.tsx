import React from 'react';
import { Modal, Button, createTheme, ThemeProvider } from '@mui/material';

type DeleteConfirmationModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

function DeleteConfirmationModal(
  deleteConfirmationModalProps: DeleteConfirmationModalProps
): JSX.Element {
  return (
    <ThemeProvider theme={modalTheme}>
      <Modal
        open={deleteConfirmationModalProps.open}
        onClose={deleteConfirmationModalProps.onClose}
        aria-labelledby="delete-confirmation-modal"
        aria-describedby="confirm-delete"
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#3d405b',
            color: '#e2c799',
            border: '2px solid #e2c799',
            padding: '20px',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          <h2 id="delete-confirmation-modal">
            Are you sure you want to delete this vacation?
          </h2>
          <Button onClick={deleteConfirmationModalProps.onConfirm}>
            Confirm
          </Button>
          <Button
            onClick={deleteConfirmationModalProps.onClose}
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </ThemeProvider>
  );
}

export default DeleteConfirmationModal;

const modalTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Mantinia Regular',
          color: '#E2C799',
          border: '1px solid #E2C799',
          backgroundColor: '#3D405B',
          '&:hover': {
            backgroundColor: '#E2C799',
            color: '#3D405B',
          },
        },
      },
    },
  },
});
