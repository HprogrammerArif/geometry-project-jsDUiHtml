function calculateTriangleArea() {
  const baseInput = document.getElementById('base-input');
  const inputValue = baseInput.value;
  const base = parseFloat(inputValue);
  
// get triangle value
const triangleHeightValue = document.getElementById('height-input');
const triangleHeightText = triangleHeightValue.value;
const height = parseFloat(triangleHeightText)

console.log(height);

// calculate triangle area
const area = 0.5*base*height;
console.log("Area of the triangle is: ", area);

//displaay triangle area
const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText= area;

}