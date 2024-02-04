import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({showTxt1,showTxt2 ,btnTxt1, btnTxt2,btnFnc1,btnFnc2,open}) {


  return (
    <React.Fragment>
      <Dialog
        open={open}
        // onClose={task}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {showTxt1}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {showTxt2}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={btnFnc1}>{btnTxt1}</Button>
          <Button onClick={btnFnc2} autoFocus>
            {btnTxt2}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
