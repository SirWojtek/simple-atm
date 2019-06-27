export interface WithdrawInput {
  amount: number;
}

export interface WithdrawResponse {
  amount: number;
  notes: number[];
}

const NOTES = [100, 50, 20, 10];

export function withdraw(input: WithdrawInput): WithdrawResponse {
  if (typeof input.amount !== 'number') {
    throw Error('Amount is not a number');
  }
  if (!input.amount) {
    return {
      amount: input.amount,
      notes: [],
    };
  }

  const notes = [];
  let workingAmount = input.amount;
  let note;

  while ((note = NOTES.find(n => n <= workingAmount))) {
    notes.push(note);
    workingAmount -= note;
  }

  if (workingAmount) {
    throw Error('Cannot withdraw this amount');
  }

  return {
    amount: input.amount,
    notes,
  };
}
