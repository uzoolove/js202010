var arr = [100, 200];
arr[2] = 300;
arr.push(400);
arr.unshift(50);

console.log(typeof arr, arr);

// 배열의 모든 요소 출력(for)
for(var i=0; i<arr.length; i++){
  console.log(i, arr[i]);
}

// 배열의 모든 요소 출력(for-in)
for(var i in arr){
  // TODO: prototype 단원에서 자세히 확인. hasOwnProperty()
  if(arr.hasOwnProperty(i)){
    console.log(i, arr[i]);
  }
}

// 배열의 모든 요소 출력(for-of, ECMA6)
for(var elem of arr){
  console.log(elem);
}

// 배열의 모든 요소 출력(forEach(), ECMA5)
arr.forEach(function(elem, i){
  console.log(i, elem);
});