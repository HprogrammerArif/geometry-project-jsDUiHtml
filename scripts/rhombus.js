function calculateRhombusArea(){
  const perimeter = getInputValueById('rhombus-length');
  const diagonalMeter = getInputValueById('rhombus-length');

  const area = 0.5*perimeter*diagonalMeter;

  setInnerTextById('rhombus-area', area);
  console.log(area);
}

function getInputValueById(inputFieldValue) {
  const inputField = document.getElementById(inputFieldValue);
  const inputText = inputField.value;
  const value = parseFloat(inputText);
  return value;
}
function setInnerTextById(elementId, area) {
   const element = document.getElementById(elementId);
   element.innerText= area;
}