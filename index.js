const express = require('express');
const logger = require('morgan');

const dotenv = require('dotenv')

const { error } = dotenv.config();

if (error) {
  throw error;
}

const app = express();

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'Hello Express' });
});

app.get('/users', (req, res) => {
  res.json({ data: [
      { id: 1, name: 'Bob' },
      { id: 2, name: 'Tom' },
    ]
  });
});

app.listen(process.env.PORT, () => {
  console.log('Server started...');
});
