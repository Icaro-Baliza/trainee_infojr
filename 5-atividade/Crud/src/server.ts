import express from 'express';
import {router} from './routes';
const app = express();

app.use(express.json())
app.use(router)

//app.get('/users', (request, response) => {
  //return response.json('Hello World!');
//});

app.listen(3333, () => {
  console.log('HTTP Server running!');
});