import React, { useState } from 'react';
import { Typography, Box, Theme, TextField } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers-pro';
import { SprintCell } from './SprintCell';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '34px',
      lineHeight: '112px',
      letterSpacing: '-1.5px',
    },
    body1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
});

export const TitleAndDate = () => {
  const [startDate, setStartDate] = useState<Dayjs>(dayjs('2021-09-12'));
  const [endDate, setEndDate] = useState<Dayjs>(dayjs('2021-10-12'));
  const [name, setName] = useState<string>('"Sourcery Students" - Sprint');

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
                <Box sx={{ position: 'relative', width: '173px' }}>
                  <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    format="MMM DD, YYYY"
                  />
                  <Box
                    sx={{
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      bottom: '0',
                      left: '0',
                    }}
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
                <Box sx={{ position: 'relative', width: '173px' }}>
                  <DatePicker
                    label="End Date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    format="MMM DD, YYYY"
                  />
                  <Box
                    sx={{
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      bottom: '0',
                      left: '0',
                    }}
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
