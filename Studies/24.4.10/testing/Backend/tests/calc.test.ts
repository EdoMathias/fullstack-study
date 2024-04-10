import { describe, it } from 'mocha';
import { expect } from 'chai';
import { calcUtil } from '../src/2-utils/calc';

// calc.ts unit tests:
describe('Testing CalcUtil', () => {
  it('should return a sum of 15.5', () => {
    const sum = calcUtil.getSum([1, 2, 3, 4, 5.5]);
    expect(sum).equal(15.5);
  });

  it('should return a negative sum from negative array', () => {
    const sum = calcUtil.getSum([-1, -2, -3, -4, -5]);
    expect(sum).equal(-15);
  });

  it('should fail if sending empty array', () => {
    try {
      const sum = calcUtil.getSum([]);
      expect.fail();
    } catch (error) {
      expect(error).to.be.an('error');
    }
  });
});
