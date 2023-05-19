import * as React from 'react';
import {
  Typography,
  Box,
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
import Add from '@mui/icons-material/Add';
import TopTable from './TopTable';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTeamMember,
  getMembersRequest,
} from '../../redux/ManageTeam/ManageTeamActions';
import BottomTable from './BottomTable';
import { RootState } from '../../redux/store';

export default function ManageTeam() {
  const dispatch = useDispatch();

  const localUsers = useSelector(
    (state: RootState) => state.manageTeam.team.members,
  );

  const [open, setOpen] = React.useState(false);
  const [saveClicked] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  const handleAddMember = () => {
    const selectedMember = localUsers.find(
      (member: { id: number }) => member.id === selectedMemberId,
    );
    if (selectedMember) {
      dispatch(
        addTeamMember(
          selectedMember.id,
          selectedMember.email,
          selectedMember.role,
          selectedMember.firstName,
          selectedMember.lastName,
        ),
      );
    }
    handleClose();
  };

  const handleClickOpen = () => {
    dispatch(getMembersRequest());
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ maxWidth: '85%', margin: 'auto' }}>
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
            <Box sx={{ mb: 1 }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                padding="20px 50px"
                borderBottom="1px solid #E1E1E1"
              >
                <Grid item>
                  <Typography variant="h4" fontWeight="600">
                    Team members
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={handleClickOpen}
                    sx={{
                      letterSpacing: 2,
                      padding: '5px 10px',
                      fontWeight: 600,
                      borderColor: '#dadada',
                      '&:hover': {
                        backgroundColor: 'blue',
                        color: 'white',
                      },
                    }}
                  >
                    <Add sx={{ mr: 1 }} />
                    ADD NEW MEMBER
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle sx={{ textAlign: 'center', fontSize: '1em' }}>
                      Choose new member
                    </DialogTitle>
                    <DialogContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <FormControl
                        variant="filled"
                        sx={{ m: 1, flex: 1, minWidth: 400 }}
                      >
                        <InputLabel>Member</InputLabel>
                        <Select
                          value={selectedMemberId}
                          onChange={(event) => {
                            setSelectedMemberId(Number(event.target.value));
                          }}
                        >
                          {localUsers.map((member: any) => (
                            <MenuItem key={member.id} value={member.id}>
                              {member.id} |{' '}
                              {member.firstName && member.lastName
                                ? `${member.firstName} ${member.lastName}`
                                : member.email}{' '}
                              | {member.role}
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
              <BottomTable />
            </Box>
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
    </Box>
  );
}
