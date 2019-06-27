import * as express from 'express';
import * as bodyParser from 'body-parser';

import {WithdrawInput, withdraw} from './functions/withdraw';

const app = express();

app.use(bodyParser.json());

app.post('/withdraw', (req, res) => {
  const input: WithdrawInput = req.body;
  const output = withdraw(input);
  res.send(output);
});

app.listen(8080);
