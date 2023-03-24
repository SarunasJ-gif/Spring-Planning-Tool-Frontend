import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { GridCellParams } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const rowsTop = [createData('Justas Team', 5, 12, 847)];

function createData(
  name: string,
  members: number,
  projects: number,
  tasks: number,
) {
  return { name, members, projects, tasks };
}

const columns: GridColDef[] = [
  {
    field: 'avatar',
    headerName: '',
    width: 50,
    renderCell: (params: GridCellParams) => (
      <Avatar alt={params.row.name} src={params.row.avatarUrl} />
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    editable: false,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 300,
    editable: true,
  },
  {
    field: 'button',
    headerName: '',
    width: 410,
    editable: false,
    align: 'right',
    renderCell: () => (
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          color: 'red',
          border: '1px solid red',
        }}
      >
        Remove
      </Button>
    ),
  },
];

const rows = [
  { id: 1, name: 'Snow', role: 'user' },
  { id: 2, name: 'Lannister', role: 'user' },
  { id: 3, name: 'Lannister', role: 'user' },
  { id: 4, name: 'Stark', role: 'user' },
  { id: 5, name: 'Targaryen', role: 'user' },
  { id: 6, name: 'Melisandre', role: null },
  { id: 7, name: 'Clifford', role: 'user' },
  { id: 8, name: 'Frances', role: 'user' },
  { id: 9, name: 'Roxie', role: 'user' },
];

function CustomToolbar() {
  return (
    <Box sx={{ height: 40, width: '100%' }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h6" sx={{ mt: 1, ml: 2, mb: 1 }}>
            Team Members
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" sx={{ mt: 1, mr: 3, mb: 1 }}>
            + Add New member
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 500, width: '100%', marginLeft: 10 }}>
      <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
        <Typography component="h1" variant="h4" color="primary" gutterBottom>
          {' '}
          Manage Team{' '}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={0} lg={0}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 200 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Team Name</TableCell>
                    <TableCell align="right">Members</TableCell>
                    <TableCell align="right">Projetcs completed</TableCell>
                    <TableCell align="right">Task completed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsTop.map((rowsTop) => (
                    <TableRow
                      key={rowsTop.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="rowsTop">
                        {rowsTop.name}
                      </TableCell>
                      <TableCell align="right">{rowsTop.members}</TableCell>
                      <TableCell align="right">{rowsTop.projects}</TableCell>
                      <TableCell align="right">{rowsTop.tasks}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ height: 420, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                components={{
                  Toolbar: CustomToolbar,
                }}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
