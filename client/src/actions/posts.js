import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

//Action Creators (functions that create actions)

// This function is responsible for fetching posts from the backend and dispatching an action to update the Redux store with the retrieved data.
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    // Once the data is fetched, the fetch all action is dispatched with the data as the payload
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
// This function is responsible for sending a new post to the backend and dispatching an action to add the new post to the Redux store
export const creatPost = (post) => async (dispatch) => {
  try {
    // Sends the new post data to the backend
    const { data } = await api.createPost(post);

    // The action dispatched here has the type 'CREATE' and includes the new post as the payload.
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
