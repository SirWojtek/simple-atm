import * as express from 'express';
import * as bodyParser from 'body-parser';

import {
  WithdrawInput,
  WithdrawResponse,
  withdraw,
  InvalidArgumentException,
  NoteUnavailableException,
} from './functions/withdraw';

const app = express();

app.use(bodyParser.json());

app.post('/withdraw', (req, res) => {
  const input: WithdrawInput = req.body;
  const output = withdraw(input);

  if (output instanceof Error) {
    res.status(400).send(output.message);
    return;
  }

  res.send(output);
});

app.listen(8080);
