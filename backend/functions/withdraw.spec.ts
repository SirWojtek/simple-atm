import {
  withdraw,
  NoteUnavailableException,
  InvalidArgumentException,
  WithdrawInput,
} from './withdraw';

describe('withdraw', () => {
  it('should return notes for correct arguments', () => {
    expect(withdraw({amount: 30.0})).toEqual({
      amount: 30.0,
      notes: [20, 10],
    });
    expect(withdraw({amount: 80.0})).toEqual({
      amount: 80.0,
      notes: [50, 20, 10],
    });

    expect(withdraw({amount: 280.0})).toEqual({
      amount: 280.0,
      notes: [100, 100, 50, 20, 10],
    });
  });

  it('should return no notes for null', () => {
    expect(withdraw({amount: null})).toEqual({
      amount: null,
      notes: [],
    });
  });

  it('should return error if it is impossible to withraw', () => {
    // NOTE: cannot make instanceof NoteUnavailableException because of:
    // https://github.com/Microsoft/TypeScript/issues/13965
    expect(withdraw({amount: 125.0}) instanceof Error).toBeTruthy();
  });

  it('should return errot for invalid arguments', () => {
    expect(withdraw({amount: -130.0}) instanceof Error).toBeTruthy();
    expect(withdraw({amount: undefined}) instanceof Error).toBeTruthy();
    expect(withdraw({amount: 'aaa'} as any) instanceof Error).toBeTruthy();
  });
});
