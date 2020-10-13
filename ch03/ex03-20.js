// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  var i;
	for(i=0; i<arr.length; i++){
		console.log(i, arr[i]);
	}
}

// 지정한 객체의 모든 속성을 출력한다.
function printObj(obj){
  for(var prop in obj){
    if(obj.hasOwnProperty(prop)){
      console.log(prop, obj[prop]);
    }    
  }
}

var arr = ['zero', 'one', 'two'];
arr.push('three');
arr.push('four');
arr.pop();
arr.shift();

// 배열에 속성 추가
arr.name = 'kim';
// 대입연산자로 속성을 추가하면 enumerable, writable, configurable이 true로 지정
// arr['age'] = 30;

Object.defineProperty(arr, 'age', {
  value: 30,
  enumerable: true, // 열거 가능한지 여부(Object.keys(arr), Object.values(arr), Object.entries(), for-in), 생략 시 false
  writable: true, // 대입 연산자로 value 수정 가능하지 여부(상수형 변수), 생략시 false
  configurable: true, // Object.defineProperty()로 속성값 설정이 가능한지 여부, 생략시 false
});

printObj(arr);