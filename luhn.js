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