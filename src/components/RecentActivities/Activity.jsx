import { Box, Typography, Grid } from '@mui/material';
import { BsCircleFill } from 'react-icons/bs';
const Activity = ({ time, activityText, color }) => {
  return (
    <Box
      sx={{
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        background: 'rgba(33, 40, 44, 0.50)',
        p: '12px 21px',
        my: 1,
      }}
    >
      <Box display={'flex'} gap={1}>
        <BsCircleFill color={color} style={{ marginTop: 4, fontSize: 14 }} />{' '}
        <Typography>{activityText}</Typography>
      </Box>
      <Box>
        <Typography>{time}</Typography>
      </Box>
    </Box>
  );
};

export default Activity;
