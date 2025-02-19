import fc from 'fast-check'
import { test, expect } from 'vitest';
import { sortNumbersAscending } from './sort.mjs';

// TODO: Add tests!
test('should sort numeric elements from the smallest to the largest one', () => {
  fc.assert(
    fc.property(fc.array(fc.integer()), (data) => {
      const sortedData = sortNumbersAscending(data);
      for (let i = 1; i < data.length; ++i) {
        expect(sortedData[i - 1]).toBeLessThanOrEqual(sortedData[i]);
      }
    }), { verbose: 2}
    ,
  );
});