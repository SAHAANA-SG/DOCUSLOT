const auth = require('./auth');

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  const decoded = await auth.verifyToken(token);
  if (!decoded) {
    return res.status(401).send({ message: 'Invalid token' });
  }
  req.user = decoded;
  next();
};

module.exports = authenticate;  