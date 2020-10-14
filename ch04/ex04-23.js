var name = 'global';
function returnName(){
	return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName());

// 객체의 메소드로 호출(객체.메소드명())
var kim = new Object();
kim.name = '김철수';
kim.age = 8;
kim.getName = returnName;

var lee = {
  name: '이영희',
  age: 9,
  getName: returnName
};

console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());

console.log(returnName(), returnName.call(kim));  // global 김철수
console.log(kim.getName(), kim.getName.apply(lee)); // 김철수 이영희
console.log(lee.getName(), lee.getName.call(window)); // 이영희 global













