// require 의 매개변수에 export할 파일 넣음
const { odd, even } = require('./var');
// 함수도 반환값의 형태로 require의 매개 변수에 넣을 수 있음
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
