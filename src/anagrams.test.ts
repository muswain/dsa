import { anagrams } from './anagrams';

describe('anagrams', () => {
  const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const words2 = ['listen', 'silent', 'enlists'];

  it('should return group of anagrams', () => {
    expect(anagrams(words)).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
    expect(anagrams(words2)).toEqual([['listen', 'silent'], ['enlists']]);
  });
});
