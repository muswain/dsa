// Given an array of words arr[], the task is to groups strings that are anagrams.
// An anagram is a word or phrase formed by rearranging the letters of another, using all the original letters exactly once.

export const anagrams = (arr: string[]): string[][] => {
  const anagramGroups: { [key: string]: string[] } = {};

  for (const word of arr) {
    // Sort the letters of the word to create a canonical representation for anagrams
    const sortedWord = word.split('').sort().join('');

    // If this sorted word is already a key in our map, add the current word to its group
    if (anagramGroups[sortedWord]) {
      anagramGroups[sortedWord].push(word);
    } else {
      // If it's a new sorted word, create a new group with the current word
      anagramGroups[sortedWord] = [word];
    }
  }

  // Extract the values (which are the groups of anagrams) from the map into an array
  return Object.values(anagramGroups);
};
