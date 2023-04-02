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
import CreateNewMember from './CreateNewMember';

export default function ManageTeam() {
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
              <Box sx={{ height: 40, width: '100%', mb: 1 }}>
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
                    <CreateNewMember />
                  </Grid>
                </Grid>
              </Box>
              <BottomTable />
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
