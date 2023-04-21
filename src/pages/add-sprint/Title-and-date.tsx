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
          width: '491px',
          height: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000000',
          marginLeft: '-45px',
          marginTop: '32.5px',
          padding: '0px',
        }}
      >
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Add new sprint
        </Typography>
        <SprintCell name={name} setName={handleNameChange} />
      </Box>
      <Box
        sx={{
          width: '512px',
          height: '160px',
          marginLeft: '550px',
          marginTop: '-20.5px',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DemoItem component="DatePicker" >
                <Box
                  sx={{
                    backgroundColor: '#D8DAFF',
                    width: '173px',
                    border: '1px solid #E1E5EB',
                    borderRadius: '4px 4px 0px 0px',
                    boxSizing: 'border-box',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.6)',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
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
                    backgroundColor: '#D8DAFF',
                    width: '173px',
                    border: '1px solid #E1E5EB',
                    borderRadius: '4px 4px 0px 0px',
                    boxSizing: 'border-box',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.6)',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
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
