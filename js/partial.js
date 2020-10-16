// 부분 적용 함수
// var a2 = a.partial('hello', undefined, 'javascript');
// a2('object');
//  -> a('hello', 'object', 'javascript');
Function.prototype.partial = function() {
	var fn = this, args = Array.prototype.slice.call(arguments);
	return function() {
		var tmpArgs = args.slice();
		var arg = 0;
		for (var i = 0; i < args.length && arg < arguments.length; i++) {
			if (tmpArgs[i] === undefined) {
				tmpArgs[i] = arguments[arg++];
			}
		}
		return fn.apply(this, tmpArgs);
	};
};