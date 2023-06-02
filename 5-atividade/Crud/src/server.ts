import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json('Hello World!');
});

app.listen(3333, () => {
  console.log('HTTP Server running!');
});