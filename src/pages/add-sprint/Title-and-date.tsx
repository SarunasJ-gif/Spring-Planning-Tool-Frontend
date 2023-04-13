import React, { useState } from 'react';
import { Typography, Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {
  DateRangePicker,
  DateRangePickerProps,
  DateRange,
} from '@mui/x-date-pickers-pro';
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
  },
});

/*const useStyles = makeStyles((theme: Theme) => ({
  dateRangePicker: {
    backgroundColor: '#D8DAFF',
  },
}));*/

export const TitleAndDate = () => {
  const [value, setValue] = useState<DateRange<Dayjs>>([
    dayjs('2021-09-12'),
    dayjs('2021-10-12'),
  ]);
  //const classes=useStyles(theme);
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
          <SprintCell name={'"Sourcery Students - Sprint 18."'} />
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
          <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
            <DemoItem component="DateRangePicker">
              <DateRangePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                /*renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <input {...startProps.inputProps} />
                    <span> to </span>
                    <input {...endProps.inputProps} />
                  </React.Fragment>
                )}
                startText={dayjs(value[0]).format("MMM DD, YYYY")}
                endText={dayjs(value[1]).format("MMM DD, YYYY")}*/
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
};
