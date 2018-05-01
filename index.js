var prompt = require('prompt');

prompt.start();

prompt.get(['word', 'times'], function (err, result) {
  const Word = result.word
  const Times = result.times
  console.log(`Type ${Word} ${Times} times`);
  requestInput(Word, Times)
});

const attempts = []

function requestInput(word, times){
  if (attempts.length < times) {
    prompt.get(['input'], function (err, result) {
      const input = result.input
      checkWord(word, input)
      requestInput(word, times)
    })
  } else {
    const successes = attempts.filter(x => x === true).length
    console.log(`${successes} out of ${attempts.length} Correct attempts`)
  }
}

function checkWord(word, input){
  const result = word === input
  storeAttempt(result)
}

function storeAttempt(attempt){
  attempts.push(attempt)
}
