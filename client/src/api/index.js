import axios from 'axios';
//  This url points to our backend route
const url = 'http://localhost:5001/posts';

//  Retrieves (fetches) posts from the backend.
export const fetchPosts = () => axios.get(url);
//  Sends new post data to the backend to create a new post.
export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
