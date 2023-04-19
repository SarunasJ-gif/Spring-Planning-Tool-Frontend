import React, { useState } from 'react';
import { Typography, Box, ThemeProvider } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { SprintCell } from './SprintCell';
import theme from './theme';

export const TitleAndDate = () => {
  const [startDate, setStartDate] = useState<Dayjs>(dayjs(''));
  const [endDate, setEndDate] = useState<Dayjs>(dayjs(''));
  const [name, setName] = useState<string>('');

  const handleNameChange = (newName: string) => {
    setName(newName);
  };

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue || dayjs());
  };
  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue || dayjs());
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'absolute',
          width: '491px',
          height: '100px',
          left: '60px',
          top: '88.5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000000',
        }}
      >
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Add new sprint
        </Typography>
        <Box sx={{ marginTop: '12px' }}>
          <SprintCell name={name} setName={handleNameChange} />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '512px',
          height: '349px',
          left: '505px',
          top: '167px',
          marginLeft: '52px',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DemoItem component="DatePicker">
                <Box
                  sx={{
                    position: 'relative',
                    width: '173px',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    format="MMM DD, YYYY"
                  />
                </Box>
              </DemoItem>
              <Box
                sx={{
                  marginLeft: '16px',
                  marginRight: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="body1">to</Typography>
              </Box>
              <DemoItem component="DatePicker">
                <Box
                  sx={{
                    position: 'relative',
                    width: '173px',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <DatePicker
                    label="End Date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    format="MMM DD, YYYY"
                  />
                </Box>
              </DemoItem>
            </Box>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
};
