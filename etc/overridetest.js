// 메모이제이션(캐싱) 기능의 함수를 정의할때 사용
// isPrime(5); 캐싱 X
// isPrime.memoization(5);  캐싱 O
Function.prototype.memoization = function(key){
  // 캐시를 위한 코드
  this.cache = this.cache || {};
  if(this.cache[key] != undefined){
    return this.cache[key];
  }else{
    // 캐시를 위한 코드
    return this.cache[key] = this(key);
  }
};

// primetest.js 복사
// 지정한 수가 소수인지 여부를 반환
var isPrime = function(num){
  // 소수 판별 코드
  var prime = true;
  for(var i=2; i<=num/2; i++){
    if(num%i == 0){
      prime = false;
      break;
    }
  }
  return prime;
};

console.time('소요시간');
console.log('3 -> ', isPrime(3));
console.log('4 -> ', isPrime(4));
console.log('5 -> ', isPrime(5));
console.log('6 -> ', isPrime(6));
console.log('7 -> ', isPrime(7));
console.log('8 -> ', isPrime(8));
console.log('9 -> ', isPrime(9));
console.log('1000000007 -> ', isPrime.memoization(1000000007));
console.log('1000000007 -> ', isPrime.memoization(1000000007));
console.log('1000000007 -> ', isPrime.memoization(1000000007));
console.timeEnd('소요시간');
