import * as React from 'react';
import { Box, Typography, AccordionSummary } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SAccordion } from '../../style/AccordionStyle';
import NewTask from '../NewTask/NewTask';

function MainPage() {
  return (
    <Box sx={{ marginLeft: '30mm', marginRight: '10mm', mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        &ldquo;Sourcery Students&rdquo; - Sprint 17
      </Typography>
      <Box>
        <Typography sx={{ fontFamily: 'Poppins' }}>
          29/09/2021 - 10/12/2021
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <SAccordion sx={{ display: 'flex', justifyContent: 'left' }}>
          <NewTask />
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: '#404CFA' }} />}
          >
            <Typography>Tasks</Typography>
          </AccordionSummary>
        </SAccordion>
      </Box>
      <Box sx={{ mt: 2 }}>
        <SAccordion sx={{ display: 'flex', justifyContent: 'left' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: '#404CFA' }} />}
          >
            <Typography>Current Plan</Typography>
          </AccordionSummary>
        </SAccordion>
      </Box>
      <Box sx={{ mt: 2 }}>
        <SAccordion sx={{ display: 'flex', justifyContent: 'left' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: '#404CFA' }} />}
          >
            <Typography>Initial Plan</Typography>
          </AccordionSummary>
        </SAccordion>
      </Box>
    </Box>
  );
}

export default MainPage;
