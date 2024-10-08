import React from 'react';
import { CardContent, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import {
  StyledCard,
  StyledCardMedia,
  StyledDetails,
  StyledOverlay,
  StyledOverlay2,
  StyledCardActions,
} from './styles';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <StyledCard>
      <StyledCardMedia
        // component='img'
        image={post.selectedFile}
        title={post.title}
      />
      <StyledOverlay>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </StyledOverlay>
      <StyledOverlay2>
        <Button
          size='small'
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <MoreHorizIcon fontSize='default' />
        </Button>
      </StyledOverlay2>
      <StyledDetails>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </StyledDetails>
      <Typography style={{ padding: '0 16px' }} variant='h5' gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {post.message}
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAltIcon fontSize='small' />
          &nbsp; Like &nbsp; {post.likeCount}
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Post;
