function userAgent(ua){
	var ua = ua || window.navigator.userAgent;
	return {
		"browser" :{
			"ie" 		: /msie/i.test(ua),
			"ie6" 		: /msie 6/i.test(ua),
			"ie7"		: /msie 7/i.test(ua),
			"ie8"		: /msie 8/i.test(ua),
			"ie9"		: /msie 9/i.test(ua),
			"ie10"		: /msie 10/i.test(ua),
			"safari"	: /applewebkit/i.test(ua) && /apple/i.test(window.navigator.vendor),
			"firefox"	: /firefox/i.test(ua),
			"chrome" 	: /applewebkit/i.test(ua) && /google/i.test(window.navigator.vendor),
			"opera" 	: /opera/i.test(ua) && window.opera,
			"rec" 		: {
				"width" 	: window.screen.availWidth,
				"height" 	: window.screen.availHeight
			}
		},
		"device" : {
			"pc" 			: /windows|macintosh/i.test(ua) && /^(?!windows phone)/.test(ua),
			"mobile" 		: /iphone|windows phone|android|ipad|ipod/i.test(ua),
			"PixelRatio" 	: window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI,
			"rec" 			: {
				"width" 		: window.screen.width,
				"height" 		: window.screen.height
			}
		},
		"viewRec" :{
			"width" 	: window.document.documentElement.clientWidth || window.document.body.clientWidth,
			"height" 	: window.document.documentElement.clientHeight || window.document.body.clientHeight
		}
	};
}