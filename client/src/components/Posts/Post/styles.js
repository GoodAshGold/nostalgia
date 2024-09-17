import { Card, CardMedia, CardActions } from '@mui/material';
import { styled } from '@mui/system';

// export default makeStyles({
//   media: {
//     height: 0,
//     paddingTop: '56.25%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     backgroundBlendMode: 'darken',
//   },
//   border: {
//     border: 'solid',
//   },
//   fullHeightCard: {
//     height: '100%',
//   },
//   card: {
// display: 'flex',
// flexDirection: 'column',
// justifyContent: 'space-between',
// borderRadius: '15px',
// height: '100%',
// position: 'relative',
//   },
//   overlay: {
// position: 'absolute',
// top: '20px',
// left: '20px',
// color: 'white',
//   },
//   overlay2: {
// position: 'absolute',
// top: '20px',
// right: '20px',
// color: 'white',
//   },
//   grid: {
//     display: 'flex',
//   },
//   details: {
// display: 'flex',
// justifyContent: 'space-between',
// margin: '20px',
//   },
//   title: {
//     padding: '0 16px',
//   },
//   cardActions: {
//     padding: '0 16px 8px 16px',
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
// });

// const Wrapper = styled('div')(({ theme }) => ({
//   border: {
//     border: 'solid',
//   },
//   fullHeightCard: {
//     height: '100%',
//   },
//   grid: {
//     display: 'flex',
//   },
// }));
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',

  // border: {
  //   border: 'solid',
  // },
  // fullHeightCard: {
  //   height: '100%',
  // },
  // grid: {
  //   display: 'flex',
  // },
}));

const StyledOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
}));
const StyledOverlay2 = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
}));
const StyledDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
}));
// const Styled = styled()(({ theme }) => ({}));
// const Styled = styled()(({ theme }) => ({}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
}));

const StyledCardActions = styled(CardActions)(({ theme }) => ({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
}));

export {
  // Wrapper,
  StyledCard,
  StyledOverlay,
  StyledOverlay2,
  StyledDetails,
  StyledCardMedia,
  StyledCardActions,
};
