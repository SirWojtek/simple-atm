import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import {
  WithdrawInput,
  WithdrawResponse,
  withdraw,
  InvalidArgumentException,
  NoteUnavailableException,
} from './functions/withdraw';

const app = express();

const allowedOrigins = ['http://localhost:4200', 'http://simple-atm.com'];

app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, callback) => {
      // NOTE: allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }

      return callback(null, true);
    },
  }),
);

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
