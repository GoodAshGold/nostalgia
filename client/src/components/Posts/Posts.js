import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
  // useSelector allows us to access the store. In this case, all posts
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems='stretch' spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
