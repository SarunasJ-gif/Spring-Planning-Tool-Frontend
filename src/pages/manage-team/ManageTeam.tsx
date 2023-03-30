import * as React from 'react';
import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DataTable from './DataTable';
import TopTable from './TopTable';

export default function ManageTeam() {
  const [saveClicked, setSaveClicked] = useState(false);
  const handleSaveClick = () => {
    setSaveClicked(true);
  };

  return (
    <Box sx={{ height: 500, width: '100%', marginLeft: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
        <Typography
          variant="h5"
          color="textPrimary"
          fontWeight="bold"
          gutterBottom
          fontFamily="Open sans"
        >
          {'Manage team'}
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
                    <Button
                      variant={saveClicked ? 'contained' : 'outlined'}
                      color="primary"
                      size="small"
                      onClick={handleSaveClick}
                      sx={{ mt: 1, mr: 2, mb: 0, fontFamily: 'Poppins' }}
                    >
                      + Add New member
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              <DataTable />
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
