

const numbers = [ 1, 2, 3, 45, 65 ];
  const sum = numbers.reduce((accumulater, index) => {
    return accumulater + index;
  }, 0);
  console.log(sum);
  const average =sum / numbers.length;
  console.log(average);

