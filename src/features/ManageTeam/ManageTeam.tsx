import React, { useEffect, useState} from 'react';
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
  TextField,
  Autocomplete,
} from '@mui/material';
import TopTable from './TopTable';
import BottomTable from './BottomTable';
import { Member } from '../../types/NewSprintTypes';
import { get } from '../../api';
import { addTeamMember } from '../../redux/ManageTeam/ManageTeamActions';
import { useDispatch } from 'react-redux';

export default function ManageTeam() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [saveClicked] = useState(false);
  const [options, setOptions ] = useState<Member[]>([]);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);


  useEffect(() => {
    handleSearchMembers();
  }, []);

  const handleSearchMembers = async () => {
    try {
      const response = await get<Member[]>('/member');
      console.log(response);
      setOptions(response);
    } catch (error) {      console.log('Error fetching members:', error);
    }
  };
  
  const handleAddMember = () => {
    const selectedMember = options.find((member) => member.id === selectedMemberId);
    if (selectedMember) {
      const id = selectedMember.id;
      const email = selectedMember.email;
      const role = selectedMember.role;
      const firstName = selectedMember.firstName;
      const lastName = selectedMember.lastName;

       dispatch(addTeamMember(id, email, role, firstName, lastName ));
      console.log('Adding member:', selectedMember);
    }
    handleClose();
  };

  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

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
                      <b>Team Members</b>
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
                        <Autocomplete
                          id="controllable-states-demo"
                          options={options}
                          getOptionLabel={(member) => {
                            const fullName = `${member.firstName} ${member.lastName}`.trim();
                            return fullName.length > 0 ? fullName : member.email;
                          }}
                          onChange={(event, newValue) => setSelectedMemberId(newValue ? newValue.id : null)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Search input"
                              InputProps={{ ...params.InputProps, type: 'search' }}
                            />
                          )}
                        />
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
              ></Grid>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );  
}