import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  DateRangePicker,
  DateRangePickerProps,
  DateRange,
} from '@mui/x-date-pickers-pro';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '34px',
      lineHeight: '112px',
      letterSpacing: '-1.5px',
    },
  },
});

export const TitleAndDate = () => {
  const [value, setValue] = useState<DateRange<Dayjs>>([
    dayjs('2021-09-12'),
    dayjs('2021-10-12'),
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'absolute',
          width: '491px',
          height: '54px',
          left: '124px',
          top: '88.5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000000',
        }}
      >
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Add new sprint
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '512px',
          height: '349px',
          left: '505px',
          top: '167px',
          border: '1px solid #ccc',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
            <DemoItem component="DateRangePicker">
              <DateRangePicker
                /*startText="Start Date"
                endText="End Date"*/
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
};
