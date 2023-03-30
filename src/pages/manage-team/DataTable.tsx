import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  GridRenderCellParams,
  useGridApiContext,
  GridColDef,
  GridRowsProp,
  DataGrid,
  gridClasses,
  GridRowId,
  GridEventListener,
  GridCellModesModel,
} from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';

interface SelectedCellParams {
  id: GridRowId;
  field: string;
}
function MySpecialButtonsRemove() {
  const [saveClicked, setSaveClicked] = useState(false);
  const handleSaveClick = () => {
    setSaveClicked(true);
    // handle any other save click logic here
  };
  return (
    <Box>
      <Button
        variant={saveClicked ? 'contained' : 'outlined'}
        color="secondary"
        size="small"
        onClick={handleSaveClick}
        sx={{
          color: saveClicked ? 'white' : 'red',
          backgroundColor: saveClicked ? 'red' : 'transparent',
          border: saveClicked ? 'none' : '1px solid red',
          // marginRight: '20px',
        }}
      >
        Remove
      </Button>
    </Box>
  );
}
function MySpecialButtonsSave() {
  const [saveClicked, setSaveClicked] = useState(false);
  const handleSaveClick = () => {
    setSaveClicked(true);
    // handle any other save click logic here
  };
  return (
    <Box>
      <Button
        variant={saveClicked ? 'contained' : 'outlined'}
        color="primary"
        size="small"
        onClick={handleSaveClick}
      >
        Save
      </Button>
    </Box>
  );
}
function SelectEditInputCell(props: GridRenderCellParams) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = async (event: SelectChangeEvent) => {
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: event.target.value,
    });
    apiRef.current.stopCellEditMode({ id, field });
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      size="small"
      sx={{ height: 1 }}
      native
      autoFocus
    >
      <option>Designer</option>
      <option>Front-end</option>
      <option>Back-end</option>
    </Select>
  );
}
const renderSelectEditInputCell: GridColDef['renderCell'] = (params) => {
  return <SelectEditInputCell {...params} />;
};

export default function StartEditButtonGrid() {
  const [selectedCellParams, setSelectedCellParams] =
    React.useState<SelectedCellParams | null>(null);
  const [cellModesModel, setCellModesModel] =
    React.useState<GridCellModesModel>({});

  const cellMode = React.useMemo(() => {
    if (!selectedCellParams) {
      return 'view';
    }
    const { id, field } = selectedCellParams;
    return cellModesModel[id]?.[field]?.mode || 'view';
  }, [cellModesModel, selectedCellParams]);

  const handleCellKeyDown = React.useCallback<GridEventListener<'cellKeyDown'>>(
    (params, event) => {
      if (cellMode === 'edit') {
        event.defaultMuiPrevented = true;
      }
    },
    [cellMode],
  );

  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        className="my-data-grid"
        onCellKeyDown={handleCellKeyDown}
        cellModesModel={cellModesModel}
        onCellModesModelChange={(model) => setCellModesModel(model)}
        hideFooter={true}
        sx={{
          [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]:
            {
              outline: 'none',
            },
          [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
            {
              outline: 'none',
            },
          ['&:hover .MuiOutlinedInput-notchedOutline']: {
            border: 'none',
          },
          ['& .Mui-focused .MuiOutlinedInput-notchedOutline']: {
            border: 'none',
          },
          ['& .MuiDataGrid-root .MuiDataGrid-cell:focus-within']: {
            border: 'none',
          },
          ['& .MuiDataGrid-cell:focus']: {
            border: 'none',
          },
        }}
      />
    </div>
  );
}

const columns: GridColDef[] = [
  {
    field: 'avatar',
    headerName: '',
    type: 'string',
    width: 50,
    editable: false,
    renderCell: () => <Avatar>XX</Avatar>,
  },
  { field: 'name', headerName: 'Name', width: 250, editable: false },
  {
    field: 'role',
    headerName: 'Role',
    width: 500,
    type: 'string',
    renderEditCell: renderSelectEditInputCell,
    editable: true,
  },
  {
    field: 'buttonR',
    headerName: '',
    width: 90,
    type: 'string',
    editable: false,
    renderCell: MySpecialButtonsRemove,
  },
  {
    field: 'buttonS',
    headerName: '',
    width: 90,
    type: 'string',
    editable: false,
    renderCell: MySpecialButtonsSave,
  },
];

const rows: GridRowsProp = [
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
];
