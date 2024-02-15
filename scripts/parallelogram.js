function calculateParallelogramArea() {
  const perimeter = getInputValueById('base-parallelogram');
  const heightMeter = getInputValueById('height-parallelogram');

  const area = perimeter*heightMeter;

  setInnerTextById('parallelogram-area', area);
  console.log(area, perimeter, heightMeter);
}

function getInputValueById(inputFieldValue) {
    const inputField = document.getElementById(inputFieldValue);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}