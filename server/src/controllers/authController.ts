import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { generateToken } from '../utils/jwt';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    user = new User({ email, passwordHash });
    await user.save();

    const token = generateToken(user.id);
    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user.id);
    res.json({ message: 'Logged in successfully', token });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    // req.user is populated by the protect middleware
    const user = await User.findById(req.user?.id).select('-passwordHash');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
