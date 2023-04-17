import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';

interface SprintCellProps {
  name: string;
  setName: (name: string) => void;
}

export const SprintCell = ({ name, setName }: SprintCellProps) => {
  const [editing, setEditing] = useState(false);
  const [tempName, setTempName] = useState(name);

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
    setName(tempName);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(event.target.value);
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
        height: '62px',
        padding: '12px',
        backgroundColor: '#D8DAFF',
        border: '1px solid #E1E5EB',
        borderRadius: '4px 4px 0px 0px',
        boxSizing: 'border-box',
        marginLeft: '60px',
        position: 'relative',
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
      {editing ? (
        <input
          ref={inputRef}
          type="text"
          value={tempName}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleInputKeyDown}
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
          }}
          onDoubleClick={handleDoubleClick}
        >
          {name}
        </Typography>
      )}
      <Box
        sx={{
          width: '100%',
          height: '2px',
          position: 'absolute',
          bottom: '0',
          left: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />
    </Box>
  );
};
