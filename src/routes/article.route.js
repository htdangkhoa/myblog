import { Router } from 'express';
import Article from '../models/article.model';

const router = Router();

router.get('/articles', async (req, res) => {
  const payload = await Article.find();

  try {
    res.status(200).json({
      ...global.data,
      payload,
    });
  } catch (error) {
    res.status(200).json({
      ...global.data,
      error,
    });
  }
});

router.post('/article', async (req, res) => {
  const { title, body } = req.body;

  try {
    const article = new Article({
      title,
      body,
    });

    const payload = await article.save();

    res.status(200).json({
      ...global.data,
      payload,
    });
  } catch (error) {
    res.status(200).json({
      ...global.data,
      error,
    });
  }
});

export default router;
