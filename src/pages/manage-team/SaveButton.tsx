import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface Props {
  onClick: () => void;
}

export default function MySpecialButtonsSave(props: Props) {
  const [saveClicked, setSaveClicked] = useState(false);
  const handleSaveClick = () => {
    setSaveClicked(true);
    props.onClick();
    // handle any other save click logic here
  };
  return (
    <Box>
      <Button
        variant={saveClicked ? 'contained' : 'outlined'}
        color="primary"
        size="small"
        onClick={handleSaveClick}
        sx={{
          '&:hover': {
            backgroundColor: 'blue',
            color: 'white',
          },
        }}
      >
        Save
      </Button>
    </Box>
  );
}
