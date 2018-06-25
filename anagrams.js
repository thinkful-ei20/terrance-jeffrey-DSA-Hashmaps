const HashMap = require('./hash-map');

const anagramList = [
  'east',
  'cars',
  'acre',
  'arcs',
  'teas',
  'eats',
  'race'
];

const groupAnagrams = (words) => {

  /**
	 * for each word in words
	 * 	sort the characters
	 * 	hash to index in hashmap and push word to the array
	 * 		if it's a new sorted word then we add word to indexing array
	 *
	 * loop through indexing array, and push arrays to 'return' array
	 *
	 */

  const toReturn = [];
  const uniques = [];
  const anagrams = new HashMap();

  for (let word of words) {
    let sorted = word.split('').sort().join('');
    let val;

    try {
      val = anagrams.get(sorted);
      val.push(word);
      anagrams.remove(sorted);
      anagrams.set(sorted, val);
    }
    catch(err) {
      uniques.push(sorted);
      anagrams.set(sorted, [word]);
    }
  }

  for (let unique of uniques) {
    toReturn.push(anagrams.get(unique));
  }

  return toReturn;
};

console.log(JSON.stringify(groupAnagrams(anagramList), null, 2));