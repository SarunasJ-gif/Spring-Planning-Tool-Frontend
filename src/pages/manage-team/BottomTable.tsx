import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import avatarImage from '../../images/avatar/avatar1.jpg';
import RemoveButton from './RemoveButton';
import SaveButton from './SaveButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = ['Designer', 'Front-End', 'Back-End'];

export default function DataTable() {
  const [rows] = React.useState([
    {
      id: 1,
      name: 'Laura Sunshine',
      role: 'Front-End',
    },
    {
      id: 2,
      name: 'Matt Brok',
      role: 'Back-End',
    },
    {
      id: 3,
      name: 'Conel Mclane',
      role: 'Designer',
    },
    {
      id: 4,
      name: 'John Smit',
      role: 'Tester',
    },
    {
      id: 5,
      name: 'Gavin Nealson',
      role: 'Front-End',
    },
  ]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <TableContainer component={Paper}>
        <Table className="my-data-grid">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '30px' }}></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left" />
              <TableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              const [showSaveButton, setShowSaveButton] = React.useState(false);
              const [selectedRole, setSelectedRole] = React.useState(row.role);
              const [anchorEl, setAnchorEl] =
                React.useState<null | HTMLElement>(null);
              const open = Boolean(anchorEl);

              const handleClickListItem = (
                event: React.MouseEvent<HTMLElement>,
              ) => {
                setAnchorEl(event.currentTarget);
              };

              const handleMenuItemClick = (
                event: React.MouseEvent<HTMLElement>,
                index: number,
              ) => {
                setSelectedRole(options[index]);
                setAnchorEl(null);
                setShowSaveButton(true);
              };

              const handleClose = () => {
                setAnchorEl(null);
              };

              const handleSave = () => {
                // Do something with the updated role value
                setShowSaveButton(false);
              };

              return (
                <React.Fragment key={row.id}>
                  <TableRow
                    sx={{
                      width: '30px',
                      '&:hover': {
                        backgroundColor: '#f0ebf7',
                        opacity: [0.9, 0.1, 10],
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: '30px' }}
                    >
                      <Avatar
                        style={{
                          display: 'flex',
                        }}
                        sx={{ ml: 4 }}
                        src={avatarImage}
                        alt="avatar"
                      />
                    </TableCell>
                    <TableCell align="left" sx={{ width: '250px' }}>
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="left"
                      onMouseEnter={handleClickListItem}
                      sx={{ width: '300px' }}
                    >
                      {selectedRole}
                      <Menu
                        id={`lock-menu-${index}`}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': `lock-button-${index}`,
                          role: 'listbox',
                        }}
                      >
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            selected={option === selectedRole}
                            onClick={(event) =>
                              handleMenuItemClick(event, index)
                            }
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </TableCell>
                    <TableCell align="left" sx={{ width: '80px' }}>
                      <RemoveButton name={row.name} />
                    </TableCell>
                    <TableCell align="left" sx={{ width: '80px' }}>
                      {showSaveButton && <SaveButton onClick={handleSave} />}
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
