import * as React from 'react';
import { Box, Typography, Accordion, AccordionSummary } from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MainPage() {
  return (
    <Box sx={{ marginLeft: '30mm', mt: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        &ldquo;Soucery Students&rdquo; - Sprint 17
      </Typography>
      <Box sx={{ fontSize: '10px' }}>
        <Typography variant="body2">29/09/2021 - 10/12/2021</Typography>
      </Box>

      <Box sx={{ mt: 4, justifyContent: 'left' }}>
        <Accordion sx={{ display: 'flex', justifyContent: 'left' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: '#404CFA' }} />}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Tasks
            </Typography>
          </AccordionSummary>
        </Accordion>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Accordion sx={{ display: 'flex', justifyContent: 'left' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: '#404CFA' }} />}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Current Plan
            </Typography>
          </AccordionSummary>
        </Accordion>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Accordion sx={{ display: 'flex', justifyContent: 'left' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fill: '#404CFA' }} />}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Initial Plan Details
            </Typography>
          </AccordionSummary>
        </Accordion>
      </Box>
    </Box>
  );
}

export default MainPage;
