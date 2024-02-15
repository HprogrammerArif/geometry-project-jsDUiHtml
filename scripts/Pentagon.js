function calculatePentagonArea() {
  const pentagonPerameter = getInputValueById('pentagon-length'); 
  const pentagonBase = getInputValueById('pentagon-base'); 

  const pentagonArea = 0.5 * pentagonPerameter * pentagonBase;

  setInnerTextById('pentagon-area', pentagonArea);
  console.log(pentagonPerameter, pentagonBase, pentagonArea);
}

// for Ellipse 

function calculateEllipseArea() {
  const ellipsePerameter = getInputValueById('ellipse-length'); 
  const ellipseBase = getInputValueById('ellipse-height'); 

  const ellipseArea = 3.1416 * ellipsePerameter * ellipseBase;

  setInnerTextById('ellipse-area', ellipseArea);
  console.log(ellipsePerameter, ellipseBase, ellipseArea);
}