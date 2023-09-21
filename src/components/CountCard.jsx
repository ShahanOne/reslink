import { Box, Typography } from '@mui/material';
const CountCard = ({ cardName, count, icon }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        px: '24px',
        py: '16px',
        height: '75px',
        borderRadius: '8px',
        background: ' rgba(255, 255, 255, 0.04)',
        gap: 5,
        border: '1px solid rgba(255, 255, 255, 0.13)',
        backdropFilter: 'blur(10.399999618530273px)',
      }}
    >
      <Box position={'relative'}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '36px',
            fontWeight: '600',
            color: '#FEFEFE',
          }}
        >
          {count}
        </Typography>
        <Typography display={'block'}>{cardName}</Typography>
      </Box>
      <Box my={1}>{icon}</Box>
    </Box>
  );
};

export default CountCard;
