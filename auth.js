const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./db');

const secretKey = 'your-secret-key';

const authenticate = async (username, password) => {
  const user = await db.getUserByUsername(username);
  if (!user) {
    return null;
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return null;
  }
  const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, {
    expiresIn: '1h',
  });
  return token;
};

const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = { authenticate, verifyToken };