import express from 'express';
import routes from './routes/main.routes';

const app = express();

app.use('/', routes);


const server = app.listen(3000, () => {
	// destructuring
  const {address, port} = server.address();

  // string templates:
  console.log(`Example app listening at http://${address}:${port}`);
});
