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
  Paper,
  MenuItem,
  Menu,
} from '@mui/material';
import { Role } from '../../enums/enums';
import { rows } from './MockData';
import { Row, TableRowElementProps, Team } from '../../types/TeamTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addTeamMember, removeTeamMember, updateMemberRole } from '../../redux/NewTeam/NewTeamActions';

interface Props {
  addMember: { name: string; role: Role };
}

export default function BottonTable(props: Props) {

  const dispatch = useDispatch();
  useSelector((state: { newTeam: Team  }) => state?.newTeam?.team );

  const [data, setData] = React.useState<Row[]>(rows);


  const handleAddMember = React.useCallback(() => {
    const newData: Row = {
      id: data.length + 1,
      name: props.addMember.name,
      role: props.addMember.role,
    };
    dispatch( addTeamMember(props.addMember.name, props.addMember.role));
    setData([...data, newData]);
  }, [data, dispatch, props.addMember.name, props.addMember.role]);

  React.useEffect(() => {
    if (props.addMember.name && props.addMember.role) {
      handleAddMember();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.addMember]);
   
  const handleUpdateMemberRole = React.useCallback((id: number, role: Role) => {
    dispatch(updateMemberRole(id, role));
  }, [dispatch]);

  const handleRemoveMember = React.useCallback((id: number) => {
    dispatch(removeTeamMember(id));
  }, [dispatch]);



  const TableRowElement: React.FC<TableRowElementProps> = ({
    row,
    index,
  }: TableRowElementProps) => {
    const [showSaveButton, setShowSaveButton] = React.useState(false);
    const [selectedRole, setSelectedRole] = React.useState(row.role);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
      event: React.MouseEvent<HTMLElement>,
      index: number,
    ) => {
      const selectedRole = Object.values(Role)[index];
      setSelectedRole(selectedRole);
      setAnchorEl(null);
      setShowSaveButton(true);
      handleUpdateMemberRole(row.id, selectedRole);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSave = () => {
      setShowSaveButton(false);
    };

  
    const handleRemove  = () => {
      setData(data.filter((member: { id: number; }) => member.id !== row.id));
      handleRemoveMember(row.id);
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
    <div style={{ height: '100%', width: '100%' }}>
      <TableContainer component={Paper}>
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
            {data.map((row, index: any) => (
              <TableRowElement row={row} index={index} key={row.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}


