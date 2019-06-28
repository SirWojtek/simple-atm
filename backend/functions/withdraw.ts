export interface WithdrawInput {
  amount: number;
}

export interface WithdrawResponse {
  amount: number;
  notes: number[];
}

export class NoteUnavailableException extends Error {}
export class InvalidArgumentException extends Error {}

const NOTES = [100, 50, 20, 10];

export function withdraw(input: WithdrawInput): WithdrawResponse | Error {
  if (input.amount === null) {
    return {
      amount: input.amount,
      notes: [],
    };
  }
  if (typeof input.amount !== 'number' || input.amount < 0) {
    return new InvalidArgumentException('Invalid amount value');
  }

  const notes = [];
  let workingAmount = input.amount;
  let note;

  while ((note = NOTES.find(n => n <= workingAmount))) {
    notes.push(note);
    workingAmount -= note;
  }

  if (workingAmount) {
    return new NoteUnavailableException('Cannot withdraw given amount');
  }

  return {
    amount: input.amount,
    notes,
  };
}
