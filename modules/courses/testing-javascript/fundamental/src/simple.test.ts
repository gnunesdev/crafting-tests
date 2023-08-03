/* eslint-disable no-undef */
import { sum, subtract } from './math';

it('should sum the values properly', async () => {
  const result = await sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

it('should subtract the values properly', async () => {
  const result = await subtract(3, 7);
  const expected = -4;
  expect(result).toBe(expected);
});
