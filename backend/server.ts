import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.post('/withdraw', (req, res) => {
  res.send(req.body);
});

app.listen(8080);
