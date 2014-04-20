(function(w){

var status = 'unfilled';
var result;

var fulfilled_callback = [];
var error_callback = [];

function resolve(obj){
    status = 'fulfilled';
    var cb;
    var cb_array = fulfilled_callback;
    var wrap_promise = false;

    for(var i=0,len=cb_array.length;i<len;i++){
        cb = cb_array[i];
        try{
            result = cb(obj) || {};
            if(typeof result.then === 'function'){
                wrap_promise = true;
                break;
            }
            else{
                obj = result;
            }
        }
        catch(e){
            reject(obj);
            break;
        }
    }
    if(wrap_promise){
        status = 'unfilled';
        if(i+1 < fulfilled_callback.length){
            fulfilled_callback = fulfilled_callback.slice(i+1);
        }
        else{
            fulfilled_callback = [];
        }
    }
    else{
        fulfilled_callback  = [];
    }
}

function reject(obj){
    status = 'failed';

    var cb;
    var cb_array = error_callback;
    var wrap_promise = false;

    for(var i=0,len=cb_array.length;i<len;i++){
        cb = cb_array[i];
        try{
            result = cb(obj) || {};
            if(typeof result.then === 'function'){
                wrap_promise = true;
                break;
            }
            else{
                obj = result;
            }
        }
        catch(e){
            break;
        }
    }
    if(wrap_promise){
        status = 'unfilled';
        if(i+1 < error_callback.length){
            error_callback = error_callback.slice(i+1);
        }
        else{
            error_callback = [];
        }
    }
    else{
        error_callback  = [];
    }
}

function Promise(func){
    if(typeof func !== 'function')
        return;

    func.call(this, resolve, reject); 

    return new Promise();
}

Promise.prototype.then = function(fulfilled, error){
    switch(status){
        case 'unfilled':
            if(typeof fulfilled === 'function'){
                fulfilled_callback.push(fulfilled); 
            }
            if(typeof error === 'function'){
                error_callback.push(error); 
            }
            break;
        case 'fulfilled':
            fulfilled(result);
            break;
        case 'faied':
            error(result);
            break;
        default:
            break;
    }
    
    return new Promise();
}

w.Promise = Promise;
})(window)
