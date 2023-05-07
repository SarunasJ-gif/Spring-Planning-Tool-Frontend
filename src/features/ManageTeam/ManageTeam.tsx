import * as React from 'react';
import {
  Typography,
  Box,
  Container,
  Grid,
  TableContainer,
  Paper,
} from '@mui/material';
import BottomTable from './BottomTable';
import TopTable from './TopTable';
import { useState } from 'react';
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
import BottomMenuMT from './BottomMenuMT';

export default function ManageTeam() {
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState<Role>(Role.TESTER);
  const [open, setOpen] = React.useState(false);
  const [saveClicked] = useState(false);

  const handleAddMember = () => {
    setAddMember({ name, role });
  };
  const [addMember, setAddMember] = React.useState({ name: '', role: Role.TESTER });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as Role);
  };

  return (
    <Box sx={{ height: '100%', width: '100%', marginLeft: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
        <Typography
          variant="h5"
          color="textPrimary"
          fontWeight="bold"
          gutterBottom
          fontFamily="Poppins"
        >
          Manage team
        </Typography>
        <Grid container spacing={7}>
          <Grid item xs={12} md={0} lg={0}>
            <TopTable />
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Box sx={{ height: 10, width: '100%', mb: 1 }}>
                <Grid
                  container
                  alignItems="left"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography
                      variant="h6"
                      sx={{ mt: 1, ml: 2, mb: 0, fontFamily: 'Poppins' }}
                    >
                      <b>Team Members </b>
                    </Typography>
                  </Grid>
                  <Grid item>
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
          value={name}
          onChange={handleNameChange}
          />
          <FormControl variant="filled" sx={{ m: 1, flex: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={role}
              onChange={handleRoleChange}
            >
              <MenuItem value={Role.DESIGNER}>Designer</MenuItem>
              <MenuItem value={Role.FRONT_END}>Front-End</MenuItem>
              <MenuItem value={Role.BACK_END}>Back-End</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'flex-end' }}>
        <Button onClick={handleAddMember}>Create</Button>
          <Button variant="text" onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
                  </Grid>
                </Grid>
              </Box>
              <BottomTable addMember={addMember}  />
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
      <BottomMenuMT />
    </Box>
  );
}