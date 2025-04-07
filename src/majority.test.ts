import { majority1 } from './majority';

describe('majority element', () => {
  const arr1 = [3, 3, 4, 2, 4, 4, 2, 4, 4];

  it('should return 4', () => {
    expect(majority1(arr1)).toBe(4);
  });

  it('should return -1, if there is no element whose frequency is greater than the half of the size of the array size.', () => {
    expect(majority1([3, 3, 4, 2, 4, 4, 2, 4])).toBe(-1);
  });
});
