let x = 121;

function isNumberPalindrome(x) {
  return x.toString().split("").reverse().join("") == x.toString();
}

console.log(isNumberPalindrome(x));
