import { styled } from '@mui/system';
import { AppBar, Typography } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: '#aa3333',
}));

const StyledImage = styled('img')(({ theme }) => ({
  marginLeft: '15px',
}));

export { StyledAppBar, StyledHeading, StyledImage };
