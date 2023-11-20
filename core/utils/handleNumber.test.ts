import {
  handleDemicalPoint,
  // checkDemicalPointLength,
} from '@/core/utils/handleNumber';

/**
 * round: 반올림
 * ceil: 올림
 * floor: 내림
 */

describe('handleDemicalPoint', () => {
  const TEST_VALUES = [100.3252, 100.3242];

  const EXPECTED_VALUES = {
    1: {
      ROUND: [100.3, 100.3],
      CEIL: [100.4, 100.4],
      FLOOR: [100.3, 100.3],
    },
    2: {
      ROUND: [100.33, 100.32],
      CEIL: [100.33, 100.33],
      FLOOR: [100.32, 100.32],
    },
  };

  describe('one demical point case', () => {
    it('Math round case', () => {
      const values = TEST_VALUES.map((testValue) =>
        handleDemicalPoint(Math.round, testValue, 1),
      );

      values.forEach((value, index) => {
        expect(value).toBe(EXPECTED_VALUES[1].ROUND[index]);
      });
    });

    it('Math ceil case', () => {
      const values = TEST_VALUES.map((testValue) =>
        handleDemicalPoint(Math.ceil, testValue, 1),
      );

      values.forEach((value, index) => {
        expect(value).toBe(EXPECTED_VALUES[1].CEIL[index]);
      });
    });

    it('Math floor case', () => {
      const values = TEST_VALUES.map((testValue) =>
        handleDemicalPoint(Math.floor, testValue, 1),
      );

      values.forEach((value, index) => {
        expect(value).toBe(EXPECTED_VALUES[1].FLOOR[index]);
      });
    });
  });

  describe('two demical point case', () => {
    it('Math round case', () => {
      const values = TEST_VALUES.map((testValue) =>
        handleDemicalPoint(Math.round, testValue, 2),
      );

      values.forEach((value, index) => {
        expect(value).toBe(EXPECTED_VALUES[2].ROUND[index]);
      });
    });

    it('Math ceil case', () => {
      const values = TEST_VALUES.map((testValue) =>
        handleDemicalPoint(Math.ceil, testValue, 2),
      );

      values.forEach((value, index) => {
        expect(value).toBe(EXPECTED_VALUES[2].CEIL[index]);
      });
    });

    it('Math floor case', () => {
      const values = TEST_VALUES.map((testValue) =>
        handleDemicalPoint(Math.floor, testValue, 2),
      );

      values.forEach((value, index) => {
        expect(value).toBe(EXPECTED_VALUES[2].FLOOR[index]);
      });
    });
  });
});

// describe('handleDemicalPoint', () => {
//   it('', () => {});

//   it('', () => {});

//   it('', () => {});
// });
