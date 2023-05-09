import * as React from 'react';
import { Box, Typography, AccordionSummary } from '@mui/material/';
import { SAccordion } from '../../style/AccordionStyle';
import TasksTable from '../../components/TasksTable/TasksTable';
import { ArrowDropDown } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Sprint } from '../../redux/Sprint/SprintReducer';

export default function MainPage() {
  const sprint = useSelector((state: { sprint: Sprint }) => state.sprint);
  return (
    <Box sx={{ maxWidth: '85%', margin: 'auto', mt: 15 }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: 34 }}>
        &ldquo;{sprint.title}&rdquo;
      </Typography>
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
