function rectangleCalculate() {
  const ractangleLength = document.getElementById('ractangle-length');
 const ractangleLengthValue = ractangleLength.value;
 const convertLengthNum = parseFloat(ractangleLengthValue);
 console.log(convertLengthNum);
  
 const ractangleHeight = document.getElementById('ractangle-height');
 const ractangleHeightValue = ractangleHeight.value;
 const convertHeightNum = parseFloat(ractangleHeightValue);
 console.log(convertHeightNum);

 const area = convertLengthNum*convertHeightNum;
 const rectangleArea = document.getElementById('rectangle-area');
 rectangleArea.innerText = area;
}