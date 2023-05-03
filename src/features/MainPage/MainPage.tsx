import * as React from 'react';
import { Box, Typography, AccordionSummary } from '@mui/material/';
import { SAccordion } from '../../style/AccordionStyle';
import TasksTable from '../../components/TasksTable/TasksTable';
import { Sprint } from '../../types/NewSprintTypes';
import { ArrowDropDown } from '@mui/icons-material';
import mock_task from '../../components/TasksTable/mock_task.json';

export default function MainPage() {
  const initialSprint: Sprint = {
    title: 'Sourcery - Sprint 1',
    startDate: '2023-04-24',
    endDate: '2023-05-05',
    tasks: mock_task,
    members: [],
  };
  const sprint: Sprint = initialSprint;
  return (
    <Box sx={{ marginLeft: '30mm', marginRight: '10mm', mt: 4 }}>
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
          <TasksTable
            tasks={sprint.tasks}
            setTasks={() => {}}
            isEditMode={false}
          />
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
      <Box sx={{ mt: 4 }}>
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
