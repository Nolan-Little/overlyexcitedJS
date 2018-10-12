

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let buildMeUp = ""
let addExcitement = (theWordArray, punctuation) => {
  for (let i = 0; i < theWordArray.length; i++) {
    if (i % 3 === 0 && i != 0) {
      buildMeUp += `${theWordArray[i]} ${punctuation} `
    } else {
      buildMeUp += `${theWordArray[i]}  `
      console.log(buildMeUp)
    }
  }
  return buildMeUp
}
addExcitement(sentence, "??");

