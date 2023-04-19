import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './SprintCell.css';

interface SprintCellProps {
  name: string;
  setName: (name: string) => void;
}

export const SprintCell = ({ name, setName }: SprintCellProps) => {
  const [editing, setEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [isInvalid, setIsInvalid] = useState(tempName.length === 0);

  const handleDoubleClick = () => {
    setEditing(true);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(tempName.length, tempName.length);
    }
  }, [editing]);

  const handleBlur = () => {
    setEditing(false);
    setIsInvalid(tempName.length === 0);
    setName(tempName);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(event.target.value);
    setIsInvalid(false);
  };
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '296px',
        height: '65px',
        padding: '12px',
        backgroundColor: '#D8DAFF',
        border: '1px solid #E1E5EB',
        borderRadius: '4px 4px 0px 0px',
        boxSizing: 'border-box',
        marginLeft: '60px',
        borderBottom: '2px solid rgba(0, 0, 0, 0.6)',
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0.4px',
          color: 'rgba(0, 0, 0, 0.6)',
          alignSelf: 'flex-start',
        }}
      >
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
            className={isInvalid ? 'invalid' : ''}
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
  );
};
