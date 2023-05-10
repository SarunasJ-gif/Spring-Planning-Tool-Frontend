import * as React from 'react';
import {
  Typography,
  Box,
  Container,
  Grid,
  TableContainer,
  Paper,
  Select,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
} from '@mui/material';
import BottomTable from './BottomTable';
import TopTable from './TopTable';
import { useEffect, useState } from 'react';
import { Role } from '../../enums/enums';
import { useDispatch } from 'react-redux';
import { getMembersRequest } from '../../redux/ManageMember/ManageMemberActions';


export default function ManageTeam() {
  const [memberId] = React.useState(0);
  const [name] = React.useState('');
  const [role] = React.useState<Role>(Role.TESTER);

  const [open, setOpen] = React.useState(false);
  const [saveClicked] = useState(false);
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
    dispatch(getMembersRequest());
  });
 

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
    <Select value={memberId} onChange={handleAddMember}>
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
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                pt={3}
                pb={3}
                sx={{ borderBottom: '1px solid #E1E1E1' }}
              >
                <Grid item>
                  <Typography variant="h4" marginLeft={8} fontWeight={500}>
                    Team Members
                  </Typography>
                </Grid>
                <Grid item>
                  <CreateNewMember />
                </Grid>
              </Grid>
              <BottomTable />
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}