import * as React from 'react';
import { Box, Typography } from '@mui/material/';

function MainPage() {
  return (
    <Box sx={{ marginLeft: '30mm', mt: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        &ldquo;Soucery Students&rdquo; - Sprint 17
      </Typography>
      <Box sx={{ fontSize: '2px' }}>
        <Typography variant="body2" sx={{ fontSize: '10px' }}>
          29/09/2021 - 10/12/2021
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Tasks
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Current Plan
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Initial Plan
        </Typography>
      </Box>
    </Box>
  );
}

export default MainPage;
