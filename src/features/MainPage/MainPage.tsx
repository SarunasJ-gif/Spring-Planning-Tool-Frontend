import * as React from 'react';
import { Box, Typography, AccordionSummary } from '@mui/material/';
import { SAccordion } from '../../style/AccordionStyle';
import TasksTableDisplay from '../../components/TasksTableDisplay/TasksTableDisplay';
import { ArrowDropDown } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSprint } from '../../redux/Sprint/SprintActions';
import { Sprint } from '../../types/NewSprintTypes';
import { SprintState } from '../../redux/Sprints/SprintsReducer';


export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSprint("active"));
  }, [dispatch]);

  const sprintDisplay = useSelector((state: { sprint: Sprint }) => state.sprint.sprint);
  const getSelectedSprint = useSelector((state: { sprint: SprintState }) => state.sprint.getSelectedSprint);
  console.log(sprintDisplay);
  return (
    <Box sx={{ maxWidth: '85%', margin: 'auto', mt: 15 }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: 34 }}>
        &ldquo;{sprintDisplay?.title}&rdquo;
      </Typography>
      <Box>
        <Typography fontWeight={'bold'}>
          {sprintDisplay?.startDate} {' - '} {sprintDisplay?.endDate}
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
          <TasksTableDisplay isEditMode={false} />
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
