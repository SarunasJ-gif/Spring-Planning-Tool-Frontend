import React, { useEffect, useRef, useState } from 'react';
import { Box, ThemeProvider, Typography } from '@mui/material';
import './SprintCell.css';
import theme from './theme';

interface SprintCellProps {
  name: string;
  setName: (name: string) => void;
}

export const SprintCell = ({ name, setName }: SprintCellProps) => {
  const [editing, setEditing] = useState(name.length === 0);
  const [tempName, setTempName] = useState(name);
  const [isInvalid, setIsInvalid] = useState(tempName.length === 0);

  const handleDoubleClick = () => {
    setEditing(true);
    setTempName(name || '');
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(tempName.length, tempName.length);
    }
  }, [editing, tempName.length]);

  const handleBlur = () => {
    if (tempName.trim().length === 0) {
      setEditing(true);
      setTempName('');
      setIsInvalid(true);
    } else {
      setEditing(false);
      setIsInvalid(false);
      setName(tempName.trim());
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTempName(value);
    setIsInvalid(value.trim().length === 0);
  };
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Box
      className="SprintCell"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '350px',
        padding: '12px',
        marginTop: '15px',
        backgroundColor: '#D8DAFF',
        border: '1px solid #E1E5EB',
        borderRadius: '4px 4px 0px 0px',
        boxSizing: 'border-box',
        marginLeft: '110px',
        borderBottom: '2px solid rgba(0, 0, 0, 0.6)',
      }}
    >
      <Typography variant="caption">
        Sprint Name
      </Typography>
      <div onDoubleClick={handleDoubleClick}>
        {editing ? (
          <input
            ref={inputRef}
            type="text"
            value={tempName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleInputKeyDown}
            className={`${isInvalid ? 'invalid' : ''}`}
            style={{ width: '100%' }}
          />
        ) : (
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0.15px',
              color: 'rgba(0, 0, 0, 0.87)',
              marginTop: 'auto',
              alignSelf: 'flex-start',
              cursor: 'text',
              marginBottom: '3px',
            }}
          >
            {name}
          </Typography>
        )}
      </div>
    </Box>
    </ThemeProvider>
  );
};
