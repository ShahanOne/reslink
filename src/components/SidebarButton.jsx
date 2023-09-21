import { Button, Grid } from '@mui/material';
const SidebarButton = ({ name, icon }) => {
  return (
    <Button
      sx={{
        backgroundColor: '#23262d',
        color: '#F2F4F7',
        borderRadius: '6px',
        display: 'flex',

        gap: 2,
        my: 1,
        width: '100%',
        '&:focus': { backgroundColor: '#101215' },
        '&:hover': { backgroundColor: '#101215' },
      }}
    >
      {' '}
      <Grid container>
        {' '}
        <Grid item xs={2}>
          {icon}
        </Grid>
        <Grid item xs={8}>
          {' '}
          {name}
        </Grid>
      </Grid>
    </Button>
  );
};

export default SidebarButton;
