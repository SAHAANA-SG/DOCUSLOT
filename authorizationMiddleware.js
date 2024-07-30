const auth = require('./auth');

const authorize = async (req, res, next) => {
  const user = req.user;
  if (!user) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  const role = user.role;
  if (role !== 'admin' && role !== 'doctor') {
    return res.status(403).send({ message: 'Forbidden' });
  }
  next();
};

module.exports = authorize;