import { Box, Typography } from '@mui/material';
const CountCard = ({ cardName, count, icon }) => {
  return (
    <Box
      sx={{
        px: { xs: '12px', md: '24px' },
        py: '16px',
        height: '75px',
        borderRadius: '8px',
        background: ' rgba(255, 255, 255, 0.04)',
        gap: 4,
        border: '1px solid rgba(255, 255, 255, 0.13)',
        backdropFilter: 'blur(10.399999618530273px)',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box position={'relative'}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: { xs: '38px', md: '36px' },
              fontWeight: '600',
              color: '#FEFEFE',
            }}
          >
            {count}
          </Typography>
        </Box>
        <Box my={1}>{icon}</Box>
      </Box>
      <Typography display={'block'}>{cardName}</Typography>
    </Box>
  );
};

export default CountCard;
