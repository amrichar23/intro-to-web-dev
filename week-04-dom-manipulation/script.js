
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  const nounOneInput = document.getElementById('noun-one-input');

  const nounOne = nounOneInput.value;

  const verbOneInput = document.getElementById('verb-one-input');

  const verbOne = verbOneInput.value;

  const adjectiveTwoInput = document.getElementById('adjective-two-input');

  const adjectiveTwo = adjectiveTwoInput.value;

  const nounTwoInput = document.getElementById('noun-two-input');

  const nounTwo = nounTwoInput.value;

  const helpInput = document.getElementById('help-input');

  const help = helpInput.value;

     // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

  const nounOneOutput = document.getElementById('noun-one-output');

  nounOneOutput.innerText = nounOne;

  const verbOneOutput = document.getElementById('verb-one-output');

  verbOneOutput.innerText = verbOne;

  const adjectiveTwoOutput = document.getElementById('adjective-two-output');

  adjectiveTwoOutput.innerText = adjectiveTwo;

  const nounTwoOutput = document.getElementById('noun-two-output');

  nounTwoOutput.innerText = nounTwo;

  const helpOutput = document.getElementById('help-output');

  helpOutput.innerText = help;

  // Get the output container element
  const outputDiv = document.getElementById('output');


      // Make the output container element visible
  outputDiv.style.display = 'block'; 
}
