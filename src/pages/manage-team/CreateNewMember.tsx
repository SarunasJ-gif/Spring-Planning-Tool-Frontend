import React, { useState } from 'react';
import {
  Select,
  SelectChangeEvent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';
import { Role } from '../../enums/enums';

export default function AddNewMemberDialog() {
  const [role, setRole] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [saveClicked] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant={saveClicked ? 'contained' : 'outlined'}
        color="primary"
        size="small"
        onClick={handleClickOpen}
        sx={{
          mt: 1,
          mr: 11,
          mb: 0,
          fontFamily: 'Poppins',
          '&:hover': {
            backgroundColor: 'blue',
            color: 'white',
          },
        }}
      >
        + ADD NEW MEMBER
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          <h5>Create new member</h5>
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            variant="filled"
            fullWidth
            sx={{ flex: 1 }}
          />
          <FormControl variant="filled" sx={{ m: 1, flex: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={role}
              onChange={handleChange}
            >
              <MenuItem value={Role.DESIGNER}>Designer</MenuItem>
              <MenuItem value={Role.FRONT_END}>Front-End</MenuItem>
              <MenuItem value={Role.BACK_END}>Back-End</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="text" color="primary">
            CREATE
          </Button>
          <Button variant="text" onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
