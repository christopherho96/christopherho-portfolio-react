import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const DeleteDialog = ({
  showDialog,
  closeDialog,
  projectId,
  deleteProject,
  scroll
}) => {
  return (
      <div>
        <Dialog
          open={showDialog}
          onClose={closeDialog}
          scroll={scroll}
          maxWidth={'sm'}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Project?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this project?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={() => deleteProject(projectId)} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
};

export default DeleteDialog;

DeleteDialog.propTypes = {
  project: PropTypes.object.isRequired,
  showDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  scroll: PropTypes.string.isRequired,
  deleteProject: PropTypes.func.isRequired
};

DeleteDialog.defaultProps = {
  scroll: 'body'
};