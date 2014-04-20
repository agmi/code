(function(win){
    function loader(src, success, fail){
        var js_script = document.createElement('script');

        js_script.onload = function() {
            success();
        };
        js_script.onreadystatechange = function() {
            if (/loaded|complete/.test(js_script.readyState)) {
                success();
            }
        };
        js_script.onerror = function(){
            fail(this.src);
        };

        js_script.src = src;

        var ref_script = document.getElementsByTagName('script')[0];
        ref_script.parentNode.insertBefore(js_script, ref_script);
    }

    var expect = 0;
    var actual = 0;

    win.loadJs = function(param){
        var js_array = param.js;
        var complete = param.complete;
        var fail = param.fail;
        expect = js_array.length;

        var checkTimer = setInterval(function(){
            if(actual == expect){
                clearInterval(checkTimer);
                complete();
            }
        },10)

        for(var i=0,len=js_array.length;i<len;i++){
            loader(
                js_array[i], 
                function(){
                    actual++;
                },
                function(src){
                    clearInterval(checkTimer);
                    fail(src);
                }
            );
        }
    };


})(window);