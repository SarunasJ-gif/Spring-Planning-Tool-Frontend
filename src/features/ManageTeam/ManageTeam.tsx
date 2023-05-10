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
import { useEffect, useState } from 'react';
import {
  Select,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material';
import { Role } from '../../enums/enums';
import { useDispatch } from 'react-redux';
import { getMembers } from '../../redux/NewMember/NewMemberActions';
import { Member } from '../../types/TeamTypes';

export default function ManageTeam() {

  const [memberId] = React.useState(0);
  const [name] = React.useState('');
  const [role] = React.useState<Role>(Role.TESTER);
  const [open, setOpen] = React.useState(false);
  const [saveClicked] = useState(false);
  const [members] = useState<Member[]>([]);
  const [member, setMember] = React.useState({ memberId: 0, name: '', role: Role.TESTER });


  const handleAddMember = () => {
    setMember({ memberId, name, role });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  });


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
          <h5>Choose new member</h5>
        </DialogTitle>
<DialogContent
  sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  }}
>
  <FormControl variant="filled" sx={{ m: 1, flex: 1, minWidth: 400 }}>
    <InputLabel id="demo-simple-select-filled-label">User</InputLabel>
    <Select
      labelId="demo-simple-select-filled-label"
      id="demo-simple-select-filled"
      value={memberId}
      onChange={handleAddMember}
    >
    {members.map((user) => (
      <MenuItem key={user.memberId} value={user.memberId}>
        {user.firstName} ({user.lastName})
      </MenuItem>
      ))}
    </Select>
  </FormControl>
</DialogContent>
        <DialogActions sx={{ justifyContent: 'flex-end' }}>
        <Button onClick={handleAddMember}>ADD</Button>
          <Button variant="text" onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
                  </Grid>
                </Grid>
              </Box>
              <BottomTable addMember={member}  />
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}