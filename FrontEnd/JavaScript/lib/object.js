Object.prototype.toTxt = function(){
	var str = '';
	var type = Object.prototype.toString.call(this[key]);
	
	for(var key in this){
		var type = Object.prototype.toString.call(this[key]);

		switch(type){
			case '[object Array]':
				str += '[Array]' + '\n';
				str += key.toString() + ':[\n' + Object.prototype.toTxt.call(this[key]) + ']\n';
				break;
			case '[object Function]':
				if(key.toString() === 'toTxt'){
					continue;
				}
				str += '[Function]' + '\n';
				str += key.toString() + '\n';
				break;
			case '[object Object]':
				str += '[Object]' + '\n';
				str += key.toString() + ':{' + '\n';
				str += Object.prototype.toTxt.call(this[key]);
				str += '}' + '\n';
				break;
			case '[object String]':
				str += '[String]' + '\n';
				str += key.toString() + ':' + this[key].toString() + '\n';
				break;
			case '[object Date]':
				str += '[Date]' + '\n';
				str += key.toString() + ':' + this[key].toString() + '\n';
				break;
			case '[object RegExp]':
				str += '[RegExp]' + '\n';
				str += key.toString() + ':' + this[key].toString() + '\n';
				break;
			case '[object Number]':
				str += '[Number]' + '\n';
				str += key.toString() + ':' + this[key].toString() + '\n';
				break;
			case '[object Boolean]':
				str += '[Boolean]' + '\n';
				str += key.toString() + ':' + this[key].toString() + '\n';
				break;
			default:
				break;
		}
	}
	return str;
};