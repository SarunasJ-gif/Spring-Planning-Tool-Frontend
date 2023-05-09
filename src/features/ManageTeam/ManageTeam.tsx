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
