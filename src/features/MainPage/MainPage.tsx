import * as React from 'react';
import { Box, Typography, AccordionSummary, Button } from '@mui/material/';
import { SAccordion } from '../../style/AccordionStyle';
import TasksTableDisplay from '../../components/TasksTableDisplay/TasksTableDisplay';
import { ArrowDropDown } from '@mui/icons-material';
import { getSprint } from '../../redux/Sprint/SprintActions';
import { useDispatch, useSelector } from 'react-redux';
import { endSprint, startSprint } from '../../redux/Sprint/SprintActions';
import { MainSprint } from '../../types/MainPageTypes';
import { SprintState } from '../../redux/Sprints/SprintsReducer';

export default function MainPage() {
  const sprint = useSelector(
    (state: { sprint: MainSprint }) => state.sprint.sprint,
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getSprint('active'));
  }, [dispatch]);

  const allSprints = useSelector((state: { sprints: SprintState }) => state.sprints.sprints);
  const activeSprintExists = allSprints.some((sprint) => sprint.isActive && !sprint.isHistorical );

const handleStartSprint = (id: number) => {
  if (!activeSprintExists) {
    dispatch(startSprint(id));
  }
};

  const handleEndSprint = (id: number) => {
    dispatch(endSprint(id));
  };

  return (
    <Box>
      {sprint === null ? (
        <Typography
          variant="h3"
          sx={{ textAlign: 'center', paddingTop: '250px' }}
        >
          No active sprint
        </Typography>
      ) : (
        <Box sx={{ maxWidth: '85%', margin: 'auto', mt: 15 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontWeight: '600', fontSize: 34 }}>
              {sprint.title}
            </Typography>
            {!sprint.isHistorical && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {!sprint.isActive && !activeSprintExists && (
                  <Button
                    variant="contained"
                    sx={{ marginRight: 2 }}
                    onClick={() => handleStartSprint(sprint.id)}
                  >
                    Start Sprint
                  </Button>
                )}
                {sprint.isActive && (
                  <Button
                    variant="outlined"
                    onClick={() => handleEndSprint(sprint.id)}
                  >
                    End Sprint
                  </Button>
                )}
              </Box>
            )}
          </Box>
          <Box>
            <Typography fontWeight="bold">
              {sprint.startDate} {' - '} {sprint.endDate}
            </Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <SAccordion sx={{ display: 'flex' }}>
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
          {sprint.isHistorical && (
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
          )}
          <Box sx={{ mt: 4, mb: 20 }}>
            <SAccordion
              sx={{ display: 'flex', justifyContent: 'left', top: '-30px' }}
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
      )}
    </Box>
  );
}
