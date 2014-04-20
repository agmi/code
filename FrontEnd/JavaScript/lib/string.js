String.prototype.trim = function(){
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.replaceAll = function(origin, replace){
	var regexp = new RegExp(origin,'g');
	return this.replace(regexp,replace);
};