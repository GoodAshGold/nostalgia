import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';

import { StyledAppBar, StyledHeading, StyledImage, StyledGrid } from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  console.log('rendered');
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth='lg'>
      <StyledAppBar position='static' color='inherit'>
        <StyledHeading variant='h2' align='center'>
          Nostalgia
        </StyledHeading>
        <StyledImage src={memories} alt='memories' height='60' />
      </StyledAppBar>
      <Grow in>
        <Container>
          <StyledGrid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </StyledGrid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
