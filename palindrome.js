function checkPalindrome(str){
  const word = new HashMap();
  let uniqueChars = '';
  // loop through input string
  for(let i = 0; i < str.length; i++){
    // check if we've encountered this char before
    // get() returns an error if the key doesn't exist so must try it first
    try{
      let val = word.get(str[i]);
      if(val > 0){
        // if the value is 1 then set it to 0.
        // this indicates we've encounted this char an even number of times
        word.remove(str[i]);
        word.set(str[i], 0);
      } else {
        // if the value is 0 then set it to 1.
        // this indicates we've encounted this char an odd number of times
        word.remove(str[i]);
        word.set(str[i], 1);
      }
    } catch(err){
      // If this is the first occurance of that letter create a new slot
      // in the hash map with value = 1. And, add that char to unique characters string
      uniqueChars += str[i];
      word.set(str[i], 1);
    }
  }
  // To be a palindrome there can be no more than one character that appears an odd number of times
  // If there is a character that appears an odd number of times then the word must have an odd length
  let counter = 0;
  for(let i = 0; i < uniqueChars.length; i++){
    if(word.get(uniqueChars[i]) === 1){
      counter++;
    }
  }
  return counter === 0 || (counter === 1 && str.length%2 === 1) ? true : false;
}