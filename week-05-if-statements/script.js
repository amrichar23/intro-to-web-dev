// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne >99) {
    alert("WRONG! The answer is double digits");
  } else if(answerOne <10) {
    alert('WRONG! The answer has more than one digit');
  } else if(answerOne >24) {
    alert('WRONG! You are too high!');
  } else if(answerOne <22) {
    alert('WRONG! Too low!');
  } else if(answerOne ==24) {
    alert('Sooo close, guess again!');
  } else if(answerOne ==22) {
    alert('Sooo close, guess again!');
  } else {
    alert('DING! DING! DING! We have a winner!');
    hide('question-one');
    show('question-two');
  }
  }


// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo >0) {
    alert("The answer is not a number, it's a beverage!");
  } else if(answerTwo !='coffee') {
    alert('WRONG!Think warm and caffeinated...');
  } else {
    alert('BINGO!');
    hide('question-two');
    show('done');
  }
}

// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
