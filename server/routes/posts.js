import express from 'express';
// below you have to add '.js' to the end of 'posts'. This is not necessary in React, but is here in Node.
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
