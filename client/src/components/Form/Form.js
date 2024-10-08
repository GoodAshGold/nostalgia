import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import {
  Root,
  StyledPaper,
  StyledForm,
  StyledFileInput,
  StyledButtonSubmit,
} from './styles';
import { creatPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(creatPost(postData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };
  return (
    <Root>
      <StyledPaper>
        <StyledForm autocomplete='off' noValidate onSubmit={handleSubmit}>
          <Typography variant='h6'>
            {currentId ? 'Editing' : 'Creating'} a Memory
          </Typography>
          <TextField
            name='creator'
            variant='outlined'
            label='Creator'
            fullWidth
            //  The value is binded to the state of postData.
            value={postData.creator}
            // The onChange allows each key stroke to update the state and rerender the component reflecting the recently typed character aka updated state of that field
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          ></TextField>
          <TextField
            name='title'
            variant='outlined'
            label='Title'
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          ></TextField>
          <TextField
            name='message'
            variant='outlined'
            label='Message'
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          ></TextField>
          <TextField
            name='tags'
            variant='outlined'
            label='Tags'
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(',') })
            }
          ></TextField>
          <StyledFileInput>
            {/*  The FileBase component automatically handles reading the file and encoding it into Base64.
            The { base64 } part destructures the object returned by FileBase (file) which has file.base64 as part of its file structure
            then sets that encoded file string as the selectedFile value of our postData */}
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </StyledFileInput>
          <StyledButtonSubmit
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            Submit
          </StyledButtonSubmit>
          <Button
            variant='contained'
            color='secondary'
            size='small'
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </StyledForm>
      </StyledPaper>
    </Root>
  );
};
export default Form;
