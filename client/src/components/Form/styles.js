import { styled } from '@mui/material/styles';
import { Paper, Button } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const StyledFileInput = styled('div')({
  width: '97%',
  margin: '10px 0',
});

const StyledButtonSubmit = styled(Button)({
  marginBottom: 10,
});

export { Root, StyledPaper, StyledForm, StyledFileInput, StyledButtonSubmit };
