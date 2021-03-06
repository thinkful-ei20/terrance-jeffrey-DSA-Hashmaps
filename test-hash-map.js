'use strict';

const HashMap = require('./hash-map');

const lor = new HashMap();
lor.set('Hobbit', 'Bilbo');
lor.set('Hobbit', 'Frodo');
lor.set('Wizard', 'Gandolf');
lor.set('Human', 'Aragon');
lor.set('Elf', 'Legolas');
lor.set('Maiar', 'The Necromancer');
lor.set('Maiar', 'Sauron');
lor.set('RingBearer', 'Gollum');
lor.set('LadyOfLight', 'Galadriel');
lor.set('HalfElven', 'Arwen');
lor.set('Ent', 'Treebeard');
console.log(JSON.stringify(lor, null, 2));

console.log(lor.get('Maiar'));


function palindrome(str) {
  const word = new HashMap();
  let odd = 0;
  let unique = '';
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    try {
      let val = word.get(letter);
      word.set(letter, val+=1);
    } catch(err) {
      unique += letter;
      word.set(letter, 1);
    }
  }

  for (let i = 0; i < unique.length; i++) {
    if (word.get(unique[i]) % 2 !== 0) {
      odd++;
    }
  }
  if (odd > 1) {
    return false;
  }
  return true;
}

console.log(palindrome('racecar'));
