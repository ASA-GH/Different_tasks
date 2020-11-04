const inputLength = document.getElementById('inputLength');
const inputLimit = document.getElementById('inputLimit');
const buttonStart = document.getElementById('buttonStart');


const getText = function(text, pattern) {
  return text.match(pattern);
}

const inputLengthHandler = function(e) {
  e.target.value = getText(e.target.value, /^([1-9][0-9]?|100)$/g);
  buttonStartDisabled();
  return e;
}
const inputLimitHandler = function(e) {
  e.target.value = getText(e.target.value, /^([1-9]|10)$/g);
  buttonStartDisabled();
  return e;
}
const buttonStartDisabled = function() {
  buttonStart.disabled = (!inputLength.value || !inputLimit.value);
};

function buttonStartHandler(){
  buttonStart.disabled = true;
  inputLength.disabled = true;
  inputLimit.disabled = true;
};

inputLength.addEventListener('input', inputLengthHandler);
inputLimit.addEventListener('input', inputLimitHandler);
buttonStart.addEventListener('click', buttonStartHandler);
