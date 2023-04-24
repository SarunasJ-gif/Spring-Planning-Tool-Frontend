import React, { useState } from 'react';
import avatarImage from '../../images/avatar/avatar1.jpg';
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
} from '@mui/material';

interface RemoveButtonProps {
  name: string;
}
export default function RemoveButton(props: RemoveButtonProps) {
  const [saveClicked, setSaveClicked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSaveClick = () => {
    setSaveClicked(true);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleRemove = () => {
    // handle remove action here
    setDialogOpen(false);
  };

  return (
    <Box>
      <Button
        variant={saveClicked ? 'contained' : 'outlined'}
        color="secondary"
        size="small"
        onClick={handleSaveClick}
        sx={{
          color: 'red',
          border: '1px solid red',
          '&:hover': {
            backgroundColor: 'red',
            color: 'white',
          },
        }}
      >
        REMOVE
      </Button>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Are you sure want to delete this member?</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={avatarImage} alt="avatar" sx={{ mr: 2 }} />
            <Typography variant="subtitle1">{props.name}</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleRemove}>
            Remove
          </Button>
          <Button onClick={handleDialogClose}>Back</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}