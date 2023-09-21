import { Box, Typography } from '@mui/material';
import Activity from './Activity';
import styles from '../../../styles/PostedProjectsCard.module.css';
const ActivitiesCard = () => {
  return (
    <Box className={styles.card} sx={{ borderRadius: '', border: '' }}>
      <Box borderBottom={'1px solid #464D50'} p={2}>
        <Typography fontSize={20}>Recent Activities</Typography>
      </Box>
      <Box className="cards">
        <Activity
          time={'6:29PM'}
          activityText={'Interview is scheduled for 12PM'}
          color={'#FDD26E'}
        />
        <Activity
          time={'8:21PM'}
          activityText={'Applicant applied on Technical researcher'}
          color={'#CD7849'}
        />
        <Activity
          time={'7:10PM'}
          activityText={'Interview is cancelled'}
          color={'#73C2B4'}
        />
        <Activity
          time={'6:29PM'}
          activityText={'Applicant applied on Technical researcher'}
          color={'#44C677'}
        />
        <Activity
          time={'6:29PM'}
          activityText={'Recieved Proposal'}
          color={'#D9D9D9'}
        />
        <Activity
          time={'6:29PM'}
          activityText={'Interview is scheduled for 12PM'}
          color={'#44C677'}
        />
      </Box>
    </Box>
  );
};

export default ActivitiesCard;
