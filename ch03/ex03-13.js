var arr = new Array('orange', 'yellow');
// 배열의 마지막 요소에 새로운 요소 추가
arr[2] = 'black';
arr.push('white');
// 배열의 처음에 새로운 요소 추가
// arr[0] = 'silver';
arr.unshift('sliver');

console.log(typeof arr, arr);