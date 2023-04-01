import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { InputLabel, MenuItem, TextField } from '@mui/material';

export default function MaxWidthDialog() {
  const [Role, setRole] = React.useState('');
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
    <React.Fragment>
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
          {' '}
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
              value={Role}
              onChange={handleChange}
            >
              <MenuItem value={'Designer'}>Designer</MenuItem>
              <MenuItem value={'Front-End'}>Front-End</MenuItem>
              <MenuItem value={'Back-End'}>Back-End</MenuItem>
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
    </React.Fragment>
  );
}
