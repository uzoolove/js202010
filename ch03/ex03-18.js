// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
	for(var i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

var colorArr = ['orange', 'yellow', 'green'];
colorArr.push('black');
colorArr.push('white');
console.log(colorArr.shift());
console.log(colorArr.pop());

printArr(colorArr);

/**
 * 유사배열객체
 *  - length 속성 추가
 *  - 0부터 시작해서 1씩 증가하는 속성 추가
 */
var arr3 = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function(elem){
    // 마지막 인덱스에 지정한 elem를 추가한다.
    // this[this.length] = elem;
    // this.length++;
    // var builtinArray = new Array();
    // TODO: prototype 단원. 배열메소드는 Array.prototype 속성이 정의되어 있음
    Array.prototype.push.call(this, elem);
  },
  pop: function(){
    // 마지막 요소 추출
    // var last = this[this.length-1];
    // this.length--;
    // delete this[this.length];
    return Array.prototype.pop.call(this);
  },
  shift: function(){
    // 첫번째 요소 추출
    // var first = this[0];
    // for(var i=0; i<this.length-1; i++){
    //   this[i] = this[i+1];
    // }
    // this.length--;
    // delete this[this.length];
    return Array.prototype.shift.call(this);
  }
};
arr3.push('black');
arr3.push('white');
console.log(arr3.shift());
console.log(arr3.pop());
printArr(arr3);