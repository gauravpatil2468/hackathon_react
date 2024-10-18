import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TrafficSignal = () => {
  const [lightColor, setLightColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setLightColor(prevColor => {
        if (prevColor === 'red') return 'green';
        if (prevColor === 'green') return 'yellow';
        return 'red';
      });
    }, 3000); // Change light every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card style={{
        height:'100%',
         backgroundColor:'#455A64'
    }}>
      <CardContent>
        <Typography color='#B2DFDB' variant="h6">Traffic Signal Demo</Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ backgroundColor: lightColor === 'red' ? 'red' : '#ccc', width: '50px', height: '50px', borderRadius: '50%', margin: '10px' }}></div>
          <div style={{ backgroundColor: lightColor === 'yellow' ? 'yellow' : '#ccc', width: '50px', height: '50px', borderRadius: '50%', margin: '10px' }}></div>
          <div style={{ backgroundColor: lightColor === 'green' ? 'green' : '#ccc', width: '50px', height: '50px', borderRadius: '50%', margin: '10px' }}></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficSignal;
