function theBeatlesPlay(musiciansArray, instrumentsArray) {
  // take the first element in the musicians array, and the first element 
  // in the instruments array, and add them together in a new array in the form
  // of a string
  debugger;
  var combinedArray = []
  // start i at 1, and if i is < the length of musicians array, increment
  for (let i = 0; i < musiciansArray.length; i++) {
    combinedArray.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`);
  }
  return combinedArray;
}

function johnLennonFacts(facts) {
  var newFacts = []
  let i = 0
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++
  }
  return newFacts;
  // body...
}

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!");
    number++
  }
  while (number < 15)
    return newArray;
  // body...
}

