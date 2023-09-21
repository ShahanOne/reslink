import { Box, Typography, Grid } from '@mui/material';
import { BsCircleFill } from 'react-icons/bs';
const Project = ({ projectStatus, projectText, color }) => {
  return (
    <Grid
      container
      sx={{
        borderRadius: '4px',
        background: 'rgba(33, 40, 44, 0.50)',
        p: '12px 21px',
        my: 1,
      }}
    >
      <Grid item xs={8}>
        <Typography>{projectText}</Typography>
      </Grid>
      <Grid item xs={4} display={'flex'} gap={1}>
        <BsCircleFill color={color} style={{ marginTop: 4, fontSize: 14 }} />{' '}
        <Typography>{projectStatus}</Typography>
      </Grid>
    </Grid>
  );
};

export default Project;
