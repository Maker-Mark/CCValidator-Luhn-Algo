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

//Function uses regular expressions to pull out the card company
validateNum = cardNumber => {
  //Replace spaces with nothing
  cardNumber = cardNumber.replace(/\s/g, "");
  var cards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^(5[1-5]\d)|2(22)\d|2[3-9]\d$/,
    amex: /^3[4-7]\d{13}$/,
    "diners-club": /^3(?:0[0-5]|[68][0-9])\d/,
    discover: /^6(?:011|5\d)\d/
  };
  for (card in cards) {
    cards[card].test(cardNumber);
    if (cards[card].test(cardNumber)) {
      return card;
    }
  }
  return null;
};

//Function gets the type of card and set's the icon in real time
// while also giving feedback on the submit button
setName = cardNumStr => {
  str = cardNumStr.replace(/\s/g, "");
  let type = validateNum(str);

  //Grab the icon
  const loc = document.querySelector("#cc-icon");
  //Grab the button
  const luhnIndicator = document.querySelector("#submit-button");
  //Adjsut the fas icon
  loc.className = `fab fa-cc-${type.toLowerCase()} pb-1 fa-3x label`;

  //Once we have enough numbers to judge
  if (cardNumStr.length > 14) {
    //If it's valid according to the luhn algo
    if (luhn(str)) {
      luhnIndicator.className = `btn btn-success mt-3`;
      luhnIndicator.textContent = `Luhn Test checks out! :)`;
      luhnIndicator.removeAttribute("disabled");
    } else {
      //Give feedback
      luhnIndicator.removeAttribute("enabled");
      luhnIndicator.className = `btn btn-danger mt-3`;
      luhnIndicator.textContent = `Failed Luhn Test, Review CC Number`;
    }
  } else {
    //Give feedback
    luhnIndicator.removeAttribute("enabled");
    luhnIndicator.className = `btn btn-danger mt-3`;
    luhnIndicator.textContent = `Failed Luhn Test, Review CC Number`;
  }
};

//Function add spaces (made it a declared function so it hoists up)
//at needed locations based off of user actions(backspaces etc) and card type.
function addSpaces(cardNumStr) {
  //Formats position based off of card type
  var formatPos = (char, backspace) => {
    let start = 0,
      end = 0,
      pos = 0,
      separator = " ",
      value = cardNumStr.value;
    //If we have a character
    if (char !== false) {
      start = cardNumStr.selectionStart; //Set the selection start
      end = cardNumStr.selectionEnd; //And end

      if (backspace && start > 0) {
        // Adjust the start condition if we backspace onkeydown
        start--;
        //If the user tries to add the space for us
        if (value[start] == separator) {
          start--; //Remove the position
        }
      }

      // To be able to replace the selection if there is one
      value = value.substring(0, start) + char + value.substring(end);
      console.log("val" + value);
      pos = start + char.length; //Position will be start plus the length
    }

    let digCount = 0,
      digTot = 0,
      groupInd = 0,
      newV = "";
    let groups = /^\D*3[47]/.test(value) // check if this is an American Express card
      ? [4, 6, 5]
      : [4, 4, 4, 4];
    //Go through the value string
    for (var i = 0; i < value.length; i++) {
      if (/\D/.test(value[i])) {
        if (start > i) {
          pos--;
        }
      } else {
        if (digCount === groups[groupInd]) {
          newV += separator;
          digCount = 0;
          groupInd++;

          if (start >= i) {
            pos++;
          }
        }
        newV += value[i];
        digCount++;
        digTot++;
      }
      //Check to see if we reached the maximum length
      if (digCount === groups[groupInd] && groups.length === groupInd + 1) {
        break;
      }
    }
    //Reset the value
    cardNumStr.value = newV;
    if (char !== false) {
      cardNumStr.setSelectionRange(pos, pos);
    }
  };

  //Listen for a keypress. Every time there is one:
  cardNumStr.addEventListener("keypress", function(e) {
    //Grab the char code
    let code = e.charCode || e.keyCode || e.which;
    // Check for tab and arrow keys
    if (
      code !== 9 &&
      (code < 37 || code > 40) &&
      // and CTRL+C / CTRL+V
      !(e.ctrlKey && (code === 99 || code === 118))
    ) {
      e.preventDefault();

      let char = String.fromCharCode(code);

      // if the character is non-digit or we already contain 15/16 digits and there is no selection
      if (
        /\D/.test(char) ||
        (this.selectionStart === this.selectionEnd &&
          this.value.replace(/\D/g, "").length >=
            (/^\D*3[47]/.test(this.value) ? 15 : 16))
      ) {
        // 15 digits if Amex
        return false;
        // return false and dont insert the character
      }
      formatPos(char);
    }
  });

  // backspace doesn't fire the keypress event
  cardNumStr.addEventListener("keydown", function(e) {
    if (e.keyCode === 8 || e.keyCode === 46) {
      // backspace or delete
      e.preventDefault();
      formatPos("", this.selectionStart === this.selectionEnd);
    }
  });

  cardNumStr.addEventListener("paste", function() {
    // A timeout is needed to get the new value pasted
    setTimeout(function() {
      formatPos("");
    }, 60);
  });

  cardNumStr.addEventListener("blur", function() {
    // reformat onblur just in case (optional)
    formatPos(this, false);
  });
}
addSpaces(document.getElementById("ccnum"));
