// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `One pill makes you larger
And one pill makes you small,
And the ones that mother gives you
Don't do anything at all.
Go ask Alice
When she's ten feet tall.
And if you go chasing rabbits
And you know you're going to fall,
Tell 'em a hookah smoking caterpillar
Has given you the call.
Call Alice
When she was just small.
When the men on the chessboard
Get up and tell you where to go
And you've just had some kind of mushroom
And your mind is moving low.
Go ask Alice
I think she'll know.
When logic and proportion
Have fallen sloppy dead,
And the White Knight is talking backwards
And the Red Queen's "off with her head!"
Remember what the dormouse said:
"Feed your head. Feed your head. Feed your head"`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '').replace('!', '').replace('"', '').replace (':', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}
function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.length < 4) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}
function displayNameWords() {
  const nameWordsElement = document.getElementById('name-words');

  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];

    if(word.startsWith ('A') || word.startsWith ('a')) {
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       nameWordsElement.appendChild(wordElement);
    }
  }
}
function displayLongestWord() {
  const longestWordElement = document.getElementById('longest-word');

  let longestWord = wordsArray[0];

  for (let i = 1; i < wordsArray.length; i++) {

    if(wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
      const wordElement = document.createElement('li');
       wordElement.innerText = wordsArray[i];
       longestWordElement.appendChild(wordElement);
    }
  }
}
function displayThirdWord() {
  let thirdWordElement = document.getElementById('third-word');

  for(let i = 0; i < wordsArray.length; i +=3){
    const word = wordsArray[i];
    const wordElement = document.createElement('li');
     wordElement.innerText = word;
     thirdWordElement.appendChild(wordElement);
  }
}

function displayUncommonWords() {

  let commonWords = ['the', 'be', 'to', 'of', 'and', 'And', 'a', 'in', 'that', 'have', 'I'];
   let uncommonWordsElement = document.getElementById('uncommon-words');

  for(let word of wordsArray){

    if(!commonWords.includes(word)){
      const wordElement = document.createElement('li');
       wordElement.innerText = word;
       uncommonWordsElement.appendChild(wordElement);
    }
  }
}




// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();
  displayShortWords();
  displayNameWords();
  displayLongestWord();
  displayThirdWord();
  displayUncommonWords();
  // TODO: Call your functions here!
}
