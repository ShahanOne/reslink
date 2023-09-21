import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { FiSettings } from 'react-icons/fi';
import { TbMessage2 } from 'react-icons/tb';
import { LuLogOut } from 'react-icons/lu';
import { PiStackSimple } from 'react-icons/pi';
import { MdOutlineBarChart, MdSupervisorAccount } from 'react-icons/md';
import SidebarButton from './SidebarButton';
const Sidebar = () => {
  return (
    <Box
      px={1}
      py={1}
      sx={{
        backgroundColor: '#23262d',
        color: '#FEFEFE',
        height: '100%',
        display: { xs: 'none', md: 'block' },
        position: 'fixed',
        // overflowY: 'hidden',
      }}
    >
      <Image src={'/logo.svg'} width={220} height={50} alt="company-logo" />
      <Box my={2}>
        <SidebarButton
          name={'Dashboard'}
          icon={<MdOutlineBarChart fontSize={24} />}
        />{' '}
        <SidebarButton
          name={'Projects'}
          icon={<PiStackSimple fontSize={22} />}
        />{' '}
        <SidebarButton
          name={'Staffing'}
          icon={<MdSupervisorAccount fontSize={22} />}
        />{' '}
        <SidebarButton name={'Messages'} icon={<TbMessage2 fontSize={22} />} />
      </Box>
      <Box mt={37}>
        <SidebarButton
          name={'Support'}
          icon={<MdOutlineBarChart fontSize={22} />}
        />
        <SidebarButton name={'Settings'} icon={<FiSettings fontSize={22} />} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '2px solid gray',
            pt: 2,
          }}
        >
          <Image src={'/Avatar.png'} width={40} height={40} alt="profile" />
          <Box>
            <Typography>Olivia Rhye</Typography>
            <Typography fontSize={12}>olivia@oggy.com</Typography>
          </Box>
          <LuLogOut fontSize={22} style={{ cursor: 'pointer' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
