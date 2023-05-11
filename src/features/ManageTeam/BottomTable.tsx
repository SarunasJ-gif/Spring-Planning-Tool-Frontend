import * as React from 'react';
import avatarImage from '../../images/avatar/avatar1.jpg';
import RemoveButton from './RemoveButton';
import SaveButton from './SaveButton';
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  Menu,
} from '@mui/material';
import { Role } from '../../enums/enums';
import { TableRowElementProps } from '../../types/TeamTypes';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeamMembers, removeTeamMember } from '../../redux/ManageTeam/ManageTeamActions';
import { useEffect } from 'react';
import { TeamState } from '../../redux/ManageTeam/ManageTeamReducer';
import { updateTeamMemberRole } from '../../redux/ManageMember/ManageMemberActions';

export default function BottonTable() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeamMembers());
  }, [dispatch]);

  const handleRoleChange = (id: number, role: Role) => {
    dispatch(updateTeamMemberRole(id, role));
  };
  
  const handleRemoveMember = (id: number) => {
    dispatch(removeTeamMember(id));
  };

    const members = useSelector((state: { manageTeam: TeamState }) => state.manageTeam.team.members);

    const TableRowElement: React.FC<TableRowElementProps> = ({row, index }: TableRowElementProps) => {
    const [showSaveButton, setShowSaveButton] = React.useState(false);
    const [selectedRole, setSelectedRole] = React.useState(row.role);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
      event: React.MouseEvent<HTMLElement>,
      index: number
    ) => {
      const selectedRole = Object.values(Role)[index];
      setSelectedRole(selectedRole);
      setAnchorEl(null);
      setShowSaveButton(true);
      dispatch(updateTeamMemberRole(row.id, selectedRole));
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSave = () => {
      setShowSaveButton(false);
    };
    
    const handleRemove = () => {
      dispatch(removeTeamMember(row.id));
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
          <TableCell component="th" scope="row" sx={{ width: '30px' }}>
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
            {row.email}
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
              {Object.values(Role).map((role, index) => (
                <MenuItem
                  key={role}
                  selected={role === selectedRole}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {role}
                </MenuItem>
              ))}
            </Menu>
          </TableCell>
          <TableCell align="left" sx={{ width: '80px' }}>
            <RemoveButton name={row.name} handleRemoveMember={handleRemove}/>
          </TableCell>
          <TableCell align="left" sx={{ width: '80px' }}>
            {showSaveButton && <SaveButton onClick={handleSave} />}
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  };

  return (
    <TableContainer>
      <Table>
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
          {members.map((member, index) => (
            <TableRowElement
              key={member.id}
              row={member}
              index={index}
              onRoleChange={handleRoleChange}
              onRemoveMember={handleRemoveMember}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
}


