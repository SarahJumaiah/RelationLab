import express from 'express';
import { createArticle, getArticles, getArticleById, updateArticle, deleteArticle } from '../controllers/articleController.js';
import authenticateToken from '../middleware/authenticateToken.js';

const router = express.Router();

router.post('/articles', authenticateToken, createArticle);
router.get('/articles', getArticles);
router.get('/articles/:id', getArticleById);
router.patch('/articles/:id', authenticateToken, updateArticle);
router.delete('/articles/:id', authenticateToken, deleteArticle);

export default router;
