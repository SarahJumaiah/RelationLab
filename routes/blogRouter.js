import express from 'express';
import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogController.js';
import authenticateToken from '../middleware/authenticateToken.js';

const router = express.Router();

router.post('/blogs', authenticateToken, createBlog);
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);
router.patch('/blogs/:id', authenticateToken, updateBlog);
router.delete('/blogs/:id', authenticateToken, deleteBlog);

export default router;
