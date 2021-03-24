import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config';

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    SECRET_KEY,
    { expiresIn: '1h' },
  );
}

export default { generateToken };
