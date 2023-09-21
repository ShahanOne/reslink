import { Box, Grid } from '@mui/material';
import Sidebar from '../Sidebar';
const DashboardLayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={0} md={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={10}>
        {{ ...children }}
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
