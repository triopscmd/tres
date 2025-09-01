import jwt from 'jsonwebtoken';

export const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  });
};

export const verifyToken = (token: string): jwt.JwtPayload | string => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};
