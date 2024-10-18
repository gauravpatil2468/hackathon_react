import React from 'react';
import { Typography, Box } from '@mui/material';
import LaneStats from './LaneStats';
// import TrafficStats from './TrafficStats';

const Dashboard = () => {
  // Dummy data for demo
  // const totalToday = 500;
  // const avgFlowRate = 50;
  // const congestionLevel = 'Moderate';

  return (
    <Box display="flex" margin={0} padding='5px' flexDirection="column" height="100vh" sx={{ backgroundColor: '#263238' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#20B2AA' }}>
        Smart Traffic Management System
      </Typography>

      {/* First Row: Two LaneStats */}
      <Box display="flex" justifyContent="space-between" sx={{ marginTop: '20px' }}>
        <Box display="flex" flexDirection="column" flex={1} marginRight="10px">
          <LaneStats />
        </Box>
        <Box display="flex" flexDirection="column" flex={1}>
          <LaneStats />
        </Box>
      </Box>

      {/* Second Row: Two LaneStats */}
      <Box display="flex" justifyContent="space-between" sx={{ marginTop: '10px' }}>
        <Box display="flex" flexDirection="column" flex={1} marginRight="10px">
          <LaneStats />
        </Box>
        <Box display="flex" flexDirection="column" flex={1}>
          <LaneStats />
        </Box>
      </Box>

      {/* Third Row: Traffic Stats */}
      {/* <Box 
        display="flex" 
        flexGrow={1} 
        sx={{ marginTop: '20px', padding: '10px' }} // Add padding to the row
      >
        <Box 
          flex={1} 
          display="flex" 
          flexDirection="column" 
          sx={{ padding: '0px', height: '100%', backgroundColor: 'black' }} // Ensure full height and padding
        >
          <TrafficStats totalToday={totalToday} avgFlowRate={avgFlowRate} congestionLevel={congestionLevel} />
        </Box>
      </Box> */}
    </Box>
  );
};

export default Dashboard;

