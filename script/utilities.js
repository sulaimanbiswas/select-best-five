function getInputToValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

function getElementToValueById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementFieldValueString = elementField.innerText;
  const elementFieldValue = parseFloat(elementFieldValueString);
  return elementFieldValue;
}

function setElementTextValue(elementId, result) {
  const element = document.getElementById(elementId);
  element.innerText = result;
}
