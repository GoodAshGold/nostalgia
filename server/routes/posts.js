import express from 'express';
// below you have to add '.js' to the end of 'posts'. This is not necessary in React, but is here in Node.
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;
