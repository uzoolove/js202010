// 10 + 100의 결과를 출력한다.
// TODO: hoisting 단원. 함수 선언보다 호출을 먼저 할 수 있다.
add();
function add(){
  var n1 = 10;
  var n2 = 100;
  var result = n1 + n2;
  console.log(n1 + ' + ' + n2 + ' = ' + result);
}
add();
// 전달받은 숫자와 100의 합계를 출력한다.
function add100(n1){
  var n2 = 100;
  var result = n1 + n2;
  // ECMA6 Template literal
  console.log(`${n1} + ${n2} = ${result}`);
}
add100(20);
add100(30);
// 전달받은 두 수의 합계를 출력한다.
function sum(n1, n2){
  var result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
}
sum(40, 50);
var returnSum = sum(60, 70);
console.log(returnSum);
// 전달받은 두 수의 합계를 반환한다.
function getSum(n1, n2){
  var result = n1 + n2;
  return (`${n1} + ${n2} = ${result}`);
}
var result = getSum(80, 90);
console.log(result);
console.log(getSum(10, 20));