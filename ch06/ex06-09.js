var Counter = function(){
	var count = 0;
	this.ride = function(){
    if(count < 45){
      count++;
    }else{
      console.log('정원초과.');
    }
	};
	this.getCount = function(){
		return count;
	};
};

var c = new Counter();
c.ride();
c.ride();
for(var i=0; i<45; i++){
  c.ride();
}
// c.count += 45;

console.log('전체 탑승자', c.getCount());
