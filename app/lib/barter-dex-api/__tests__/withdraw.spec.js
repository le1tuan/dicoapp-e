import withdraw from '../withdraw';

describe('utils/barter-dex-api/withdraw', () => {
  it('should handle the withdraw correctly', () => {
    const state = {
      userpass: null
    };
    const coin = 'BEER';
    const outputs = [{ RL1XYoxbKaETGSqiS4po3pk1ZjRYqHBqvc: 1 }];
    const fakeHttpProvider = {
      privateCall(params) {
        expect(params).toEqual({
          coin,
          outputs,
          method: 'withdraw'
        });
      }
    };
    const api = Object.assign({}, fakeHttpProvider, withdraw(state));
    api.withdraw({
      coin,
      outputs
    });
  });
});
