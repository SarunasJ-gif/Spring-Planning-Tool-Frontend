import React, { useRef } from 'react';
import { TextField, ThemeProvider } from '@mui/material';
import theme from './theme';

interface SprintCellProps {
  name: string;
}

export const SprintCell = ({ name}: SprintCellProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      inputRef.current?.blur();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="filled-basic"
        label="Sprint Name"
        variant="filled"
        defaultValue={name}
        style={{ width: '328px', marginLeft: '88px' }}
        inputRef={inputRef}
        onKeyDown={handleKeyDown}
      />
    </ThemeProvider>
  );
};
