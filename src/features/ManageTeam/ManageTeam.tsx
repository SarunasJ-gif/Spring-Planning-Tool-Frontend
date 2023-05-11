import * as React from 'react';
import {
  Typography,
  Box,
  Container,
  Grid,
  TableContainer,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import TopTable from './TopTable';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMembersRequest } from '../../redux/ManageMember/ManageMemberActions';
import { RootState } from '../../redux/store';
import { addTeamMember } from '../../redux/ManageTeam/ManageTeamActions';
import { Role } from '../../enums/enums';
import BottomTable from './BottomTable';

export default function ManageTeam() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembersRequest());
  }, [dispatch]);

  const localUsers = useSelector((state: RootState) => state.manageMember.members);

  const [open, setOpen] = React.useState(false);
  const [saveClicked] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);
  const [selectedMemberRole, setSelectedMemberRole] = useState<Role | null>(null);


  
  const handleAddMember = () => {
    if (selectedMemberRole !== null) {
      dispatch(addTeamMember(Number(selectedMemberId), selectedMemberRole));
      handleClose();
    }
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Container>
        <Typography
          variant="h1"
          color="textPrimary"
          fontWeight="bold"
          gutterBottom
          fontSize={32}
          mt={15}
        >
          Manage team
        </Typography>
        <Grid container>
          <Grid item xs={12}>
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
      <InputLabel>User</InputLabel>
      <Select
  value={selectedMemberId}
  onChange={(event) => {
    setSelectedMemberId(Number(event.target.value));
    const selectedMember = localUsers.find((member: any) => member.id === event.target.value);
    setSelectedMemberRole(selectedMember?.role || null);
  }}
>
  {localUsers.map((member: any) => (
    <MenuItem key={member.id} value={member.id}>
      {member.id} / {member.email} / {member.role}
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
               <BottomTable />
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                pt={3}
                pb={3}
                sx={{ borderBottom: '1px solid #E1E1E1' }}
              >
              </Grid>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}