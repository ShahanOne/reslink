import { Box, Typography } from '@mui/material';
import Project from './Project';
import styles from '../../../styles/PostedProjectsCard.module.css';
const ProjectsCard = () => {
  return (
    <Box className={styles.card} sx={{ borderRadius: '', border: '' }}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        borderBottom={'1px solid #464D50'}
        p={2}
      >
        <Typography fontSize={20}>Posted Projects</Typography>
        <Typography
          sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
        >
          See All
        </Typography>
      </Box>
      <Box className="cards" px={2}>
        <Project
          projectStatus={'Resume review'}
          projectText={'Thermal protective performance an...'}
          color={'#FDD26E'}
        />
        <Project
          projectStatus={'Interview'}
          projectText={'Effect of heat flux and moisture cont...'}
          color={'#CD7849'}
        />
        <Project
          projectStatus={'Task'}
          projectText={'Thermal protective performance an...'}
          color={'#73C2B4'}
        />
        <Project
          projectStatus={'Payment'}
          projectText={'Testing and evaluation of functional...'}
          color={'#44C677'}
        />
        <Project
          projectStatus={'Closed'}
          projectText={'Development of thermal liner for Ext...'}
          color={'#D9D9D9'}
        />
        <Project
          projectStatus={'Payment'}
          projectText={'Testing and evaluation of functional...'}
          color={'#44C677'}
        />
      </Box>
    </Box>
  );
};

export default ProjectsCard;
