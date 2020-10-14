// ex04-23.js 복사
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

// 개체를 생성해서 반환하는 함수
function Person(name, age){
  // var obj = {};

  if(!(this instanceof Person)){
    return new Person(name, age);
  }

  this.name = name;
  this.age = age;
  this.getName = function(){
    return this.name;
  }

  // return obj;
}
var kim = new Person('김철수', 8);
var lee = new Person('이영희', 9);
var hong = Person('홍길동', 10);
console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());
console.log(hong.age, hong.getName());














