/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let s = "";
  let rs = "";

  for (let i = 0; i < str.length; i++) {
    const ascii = str[i].charCodeAt(0);
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      s += str[i];
      rs = str[i] + rs;
    }
  }

  return s.toUpperCase() === rs.toUpperCase();
}

module.exports = isPalindrome;
