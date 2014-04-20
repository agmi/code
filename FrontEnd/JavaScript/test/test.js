var console = {};

console.init = function() {
	var dv = document.createElement("div");
	dv.id = 'log_' + new Date().getTime();
	dv.style.fontSize = '40px'
	document.body.appendChild(dv);

	this.logger = dv;
};

console.log = function(obj) {
	this.error(obj, "black");
};

console.error = function(obj, color) {
	var type = Object.prototype.toString.call(obj);
	var str = '';
	switch (type) {
		case '[object Array]':
			str += '[Array]' + '\n';
			str += '[\n' + obj.toString() + ']\n';
			break;
		case '[object Object]':
			str = obj.toTxt();
			break;
		case '[object Function]':
		case '[object String]':
		case '[object Date]':
		case '[object RegExp]':
		case '[object Number]':
		case '[object Boolean]':
			str += '[' + type.replace(/object /g,"") + ']' + '\n';
			str += obj.toString() + '\n';
			break;
		default:
			break;
	}

	
	var content = document.createElement("pre");
	content.style.color = color || 'red';
	content.innerText = '==========' + new Date().toString() + '==========' + '\n' + str;
	this.logger.appendChild(content);
};

console.init();