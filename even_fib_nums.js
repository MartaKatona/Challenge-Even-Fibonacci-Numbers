/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  // do your work here

  var startNumber2 = 1;
  var startNumber1 = 0;
  var number;
  var evenFib = [];


  while (maxFibValue >= 0){

    number = startNumber2;
    startNumber2 = startNumber2 + startNumber1;
    startNumber1 = number;
    maxFibValue--;
    if (number%2 === 0) {
      evenFib.push(number);
    }
    if (number >= maxFibValue) {
      break;
    }
  }
  for (var i = 0; i < evenFib.length; i++) {
    sum += evenFib[i];
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};