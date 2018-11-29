/*
Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it.If the two numbers are equal return a or b.

    Note: a and b are not ordered!
*/

let n;

const GetSum = (a, b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  n = max - min + 1;

  return (n * (max + min)) / 2;
};

console.log(GetSum(20, 65));
