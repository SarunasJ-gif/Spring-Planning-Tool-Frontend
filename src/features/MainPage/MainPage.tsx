import * as React from 'react';
import {
  Box,
  Typography,
  AccordionSummary,
  Button,
} from '@mui/material/';
import { SAccordion } from '../../style/AccordionStyle';
import TasksTable from '../../components/TasksTable/TasksTable';
import { ArrowDropDown } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Sprint } from '../../redux/Sprint/SprintReducer';
import { endSprint, startSprint } from '../../redux/Sprint/SprintActions';

export default function MainPage() {
  const sprint = useSelector((state: { sprint: Sprint }) => state.sprint);
  const dispatch = useDispatch();

  const handleStartSprint = () => {
    const newSprint = { ...sprint };
    dispatch(startSprint(newSprint));
  };

  const handleEndSprint = () => {
    dispatch(endSprint(sprint.id));
  };

  return (
    <Box sx={{ maxWidth: '85%', margin: 'auto', mt: 15 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 34 }}>
          &ldquo;{sprint.title}&rdquo;
        </Typography>
        {
          sprint.isActive ? (
            null 
          ):
          (<Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="contained"
            sx={{ marginRight: 2 }}
            onClick={handleStartSprint}
          >
            Start Sprint
          </Button>
          <Button
            variant="outlined"
            onClick={handleEndSprint}
          >
            End Sprint
          </Button>
        </Box>)
        }
      
      </Box>
      <Box>
        <Typography fontWeight={'bold'}>
          {sprint.startDate} {' - '} {sprint.endDate}
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <SAccordion
          sx={{
            display: 'flex',
          }}
        >
          <AccordionSummary
            sx={{ zIndex: '1' }}
            expandIcon={<ArrowDropDown style={{ fill: '#404CFA' }} />}
          >
            <Typography variant="h4" fontWeight={500}>
              Tasks
            </Typography>
          </AccordionSummary>
          <TasksTable isEditMode={false} />
        </SAccordion>
      </Box>
      <Box sx={{ mt: 4 }}>
        <SAccordion
          sx={{ display: 'flex', justifyContent: 'left', top: '-30px' }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDown style={{ fill: '#404CFA' }} />}
          >
            <Typography variant="h4" fontWeight={500}>
              Current Plan
            </Typography>
          </AccordionSummary>
        </SAccordion>
      </Box>
      <Box sx={{ mt: 4, mb: 20 }}>
        <SAccordion
          sx={{ display: 'flex', justifyContent: 'left', top: '-58px' }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDown style={{ fill: '#404CFA' }} />}
          >
            <Typography variant="h4" fontWeight={500}>
              Initial Plan
            </Typography>
          </AccordionSummary>
        </SAccordion>
      </Box>
    </Box>
  );
        }