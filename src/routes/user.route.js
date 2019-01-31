import { Router } from 'express';
import User from '../models/user.model';

const router = Router();

router.post('/sign-up', async (req, res) => {
  const { email, password } = req.body;

  const user = new User({
    email,
    password,
  });

  try {
    const payload = await user.save();

    return res.status(200).json({
      ...global.data,
      payload,
    });
  } catch (error) {
    return res.status(200).json({
      ...global.data,
      error,
    });
  }
});

router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(200).json({
      ...global.data,
      error: 'Email does not exist.',
    });
  }

  return user.comparePassword(password, (error, isMatch) => {
    if (error) {
      return res.status(200).json({
        ...global.data,
        error,
      });
    }

    if (!isMatch) {
      return res.status(200).json({
        ...global.data,
        error: 'Email does not exist.',
      });
    }

    return res.status(200).json({
      ...global.data,
      payload: {
        _id: user._id,
        email: user.email,
      },
    });
  });
});

export default router;
