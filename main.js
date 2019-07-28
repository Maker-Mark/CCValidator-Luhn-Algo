/*
The Luhn algorithm is used to verify that a credit card number is valid.
(1) Multiply every even-position digit (from right) by two.
(a) If a product is greater than ten, add the digits.
(2) Add the numbers in the even positions.
(3) Add the numbers in the odd positions, except the rightmost digit.
(4) Add these last two values together.
(5) The rightmost digit should be what it takes to get the sum to be a multiple of 10

Note: No for loops, no while loops. Use functional approach (i.e. map)
*/

luhn = cardNumStr => {
  // cardNumStr as a string, assumes digits are there
  let num,
    flag = false; // flag to hit every other number
  //Turn the string into a char array, reverse it so we can use the reduce function.
  return (
    cardNumStr
      .split("")
      .reverse()
      .reduce(
        function(sum = 0, curr) {
          num = parseInt(curr); // reduce arg-0 - callback fnc
          //If we are on a doubled number, get the result from this array given the number
          //Otherwise, add the current number we are at
          return (
            sum + ((flag = !flag) ? num : [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][num])
          );
        },
        0 //Initialize the first value to zero(defaults to the first element, normally)
      ) %
      10 ==
    0
  ); // Return if the remainder is zero
};

validateNum = cardNumStr => {
  cardNumStr += "";
  amex = () =>
    cardNumStr.substring(0, 2) == "34" || cardNumStr.substring(0, 2) == "37"
      ? "Amex"
      : null;
  visa = () => (cardNumStr.substring(0, 1) == "4" ? "Visa" : null);
  // master = () => (cardNumStr.substring(0, 1) == 5 && cardNumStr.substring(1, 2) == 1 || 2 || 3 || 4 || 5) ? "Master" : null;
  type = amex() || visa();
  return type;
};

setName = cardNumStr => {
  const type = validateNum(cardNumStr);
  console.log(type);
  const loc = document.querySelector(".card-type");
  loc.textContent = type;
};

// console.log(validateNum("5185518100339602"));
