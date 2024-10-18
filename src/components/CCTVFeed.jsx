import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const CCTVFeed = () => {
  return (
    <Card style={{
        height: '100%',
        backgroundColor: '#455A64'
    }}>
      <CardContent>
        <Box display='flex' flexDirection='column'>
          <Typography color='#B2DFDB' variant="h6">CCTV Video Feed</Typography>
          {/* Updated video box size */}
          <Box style={{ height: '200px', backgroundColor: '#000', width: '100%' }}>
            {/* Video without controls, autoplay, looping, and muted */}
            <video 
              width="100%" 
              height="100%" 
              autoPlay 
              loop 
              muted 
              style={{ backgroundColor: 'black' }}
            >
              <source src={'/WhatsApp Video 2024-10-18 at 11.59.12_1341f08c.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CCTVFeed;

