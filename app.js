const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const usersRoute = require('./routes/users');
const authMiddleware = require('./authMiddleware');
const authorizationMiddleware = require('./authorizationMiddleware');

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use('/api', usersRoute);
app.use('/api', authMiddleware.authenticate);
app.use('/api/doctors', authorizationMiddleware.authorize);
app.use('/api/patients', authorizationMiddleware.authorize);

app.get('/', (req, res) => {
  res.send('Welcome to the hospital management system API!');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});