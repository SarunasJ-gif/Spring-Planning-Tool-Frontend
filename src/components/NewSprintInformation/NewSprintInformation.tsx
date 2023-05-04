import React from 'react';
import { Typography, Box, ThemeProvider } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { SprintCell } from './SprintCell';
import theme from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { Sprint } from '../../types/NewSprintTypes';
import * as actions from '../..//redux/NewSprint/NewSprintActions';

export default function NewSprintInformation() {
  
  const dispatch = useDispatch();
  
  const { title, startDate, endDate } = useSelector(
    (state: { newSprint: Sprint }) => state.newSprint.sprint,
  );
   
  const handleStartDateChange = (newValue: Dayjs | null) => {
    if (dayjs(endDate).isBefore(newValue)) {
      dispatch(actions.updateEndDate(newValue));
    }
    dispatch(actions.updateStartDate(newValue));
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    if (dayjs(newValue).isBefore(startDate)) {
      dispatch(actions.updateStartDate(newValue));
    }
    dispatch(actions.updateEndDate(newValue));
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
          marginTop: '32.5px',
          padding: '0px',
        }}
      >
        <Typography variant="h1" sx={{ textAlign: 'center' }}>
          Add new sprint
        </Typography>
        <SprintCell name={title} />
      </Box>
      <Box
        sx={{
          width: '512px',
          height: '123px',
          marginLeft: '500px',
          marginTop: '-32px',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DemoItem component="DatePicker">
                <Box
                  sx={{
                    backgroundColor: '#D8DAFF',
                    width: '173px',
                    border: '1px solid #E1E5EB',
                    borderRadius: '4px 4px 0px 0px',
                    boxSizing: 'border-box',
                    background: 'rgba(33, 33, 33, 0.08)',
                  }}
                >
                  <DatePicker
                    label="Start Date"
                    value={dayjs(startDate)}
                    onChange={handleStartDateChange}
                    format="MMM DD, YYYY"
                    slotProps={{ textField: { variant: 'filled' } }}
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
                    background: 'rgba(33, 33, 33, 0.08)',
                  }}
                >
                  <DatePicker
                    label="End Date"
                    value={dayjs(endDate)}
                    onChange={handleEndDateChange}
                    format="MMM DD, YYYY"
                    slotProps={{ textField: { variant: 'filled' } }}
                  />
                </Box>
              </DemoItem>
            </Box>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
}



