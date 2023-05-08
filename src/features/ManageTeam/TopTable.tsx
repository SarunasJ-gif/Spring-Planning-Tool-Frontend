import * as React from 'react';
import {
  TableCell,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateTeamName } from '../../redux/NewTeam/NewTeamActions';
import { Team } from '../../types/TeamTypes';

const LeftAlignedTableCell = styled(TableCell)(() => ({
  textAlign: 'left',
}));

function createData(
  name: string,
  members: number,
  projects: number,
  tasks: number,
) {
  return { name, members, projects, tasks };
}

const rowsTop = [createData('JustasTeam', 5, 12, 847)];

export default function TopTable() {

  const dispatch = useDispatch();

  const teams = useSelector((state: { newTeam: Team }) => state.newTeam.team);

  const [editingRow, setEditingRow] = React.useState(-1);
  const [editedValue, setEditedValue] = React.useState('');

  const handleDoubleClick = (index: number, value: string) => {
    setEditingRow(index);
    setEditedValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      saveEditedValue();
    }
  };

  const saveEditedValue = () => {
    if (editingRow >= 0 && editedValue.trim() !== '') {
      const newRows = [...rowsTop];
      newRows[editingRow].name = editedValue.trim();
      dispatch(updateTeamName(editingRow, editedValue.trim()));
      setEditingRow(-1);
      setEditedValue('');
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <LeftAlignedTableCell>
              <b>Team Name</b>
            </LeftAlignedTableCell>
            <LeftAlignedTableCell>
              <b>Members</b>
            </LeftAlignedTableCell>
            <LeftAlignedTableCell>
              <b>Projetcs completed</b>
            </LeftAlignedTableCell>
            <LeftAlignedTableCell>
              <b>Task completed</b>
            </LeftAlignedTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rowsTop.map((row, index) => (
  <TableRow
    key={row.name}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    {editingRow === index ? (
      <LeftAlignedTableCell
        component="th"
        scope="row"
        style={{ width: '350px' }}
      >
        <TextField
          fullWidth
          value={editedValue}
          onChange={(event) => setEditedValue(event.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          onBlur={saveEditedValue}
        />
      </LeftAlignedTableCell>
    ) : (
      <LeftAlignedTableCell
        component="th"
        scope="row"
        style={{ width: '350px', cursor: 'pointer' }}
        onDoubleClick={() => handleDoubleClick(index, row.name)}
      >
        {editedValue && editingRow === index ? editedValue : row.name}
      </LeftAlignedTableCell>
    )}
    <LeftAlignedTableCell>{row.members}</LeftAlignedTableCell>
    <LeftAlignedTableCell>{row.projects}</LeftAlignedTableCell>
    <LeftAlignedTableCell>{row.tasks}</LeftAlignedTableCell>
  </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
