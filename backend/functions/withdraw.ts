export interface WithdrawInput {
  amount: number;
}

export interface WithdrawResponse {
  amount: number;
  bills: number[];
}

export function withdraw(input: WithdrawInput): WithdrawResponse {
  if (!input.amount) {
    return {
      amount: input.amount,
      bills: [],
    };
  }

  return null;
}
