import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import {
  Wrapper,
  StyledCard,
  StyledCardMedia,
  StyledDetails,
  StyledOverlay,
  StyledOverlay2,
  StyledCardActions,
} from './styles';

const Post = ({ post }) => {
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
        <Button size='small' onClick={() => {}}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </StyledOverlay2>
      <StyledDetails>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </StyledDetails>
      <CardContent>
        <Typography style={{ padding: '0 16px' }} variant='h5' gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button size='small' color='primary' onClick={() => {}}>
          <ThumbUpAltIcon fontSize='small' />
          Like
          {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={() => {}}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Post;
