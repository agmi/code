function storage () {
    var _storage = {},
        store = undefined;
    var mode = !!window.localStorage ? "normal" : "compatible";

    var localname = "1073741824";

    var hasSend = {};

    if(mode === "normal"){ // HTML5 localStorage
        store = window.localStorage;
    }
    else{// IE UserData
        var input = document.createElement("input");
        input.id = localname;
        input.style.behavior = "url(#default#userData)";
        ijput.style.display = "none";
        document.body.appendChild(input);
        store = document.getElementById(localname);
    }

    _storage.setItem = function (key, data) {
        if(typeof data !== "string" || typeof key !== "string"){
            return null;
        }
        try{
            if(mode === "normal"){
                //when prevent 3rd party site setting cookie and site data, setItem will throw an "QuotaExceededError" exception
                //see this http://dev.w3.org/html5/webstorage/#dom-storage-setitem
                store.setItem(key, data);
            }
            else{
                store.load(localname);
                store.setAttribute(key, data);
                store.save(localname);
            }
            return true;
        }
        catch(e){
            return null;
        }
    }

    _storage.getItem = function (key) {
        if(typeof key !== "string"){
            return null;
        }
        try{
            if(mode === "normal"){
                return store.getItem(key);
            }
            else{
                store.load(localname);
                return store.getAttribute(key);
            }
        }
        catch(e){
            return null;
        }
    }

    _storage.getLength = function () {
        try{
            if(mode === "normal"){
                return store.length;
            }
            else{
                store.load(localname);
                return store.XMLDocument.documentElement.attributes.length;
            }
        }
        catch(e){
            return null;
        }
    }

    _storage.getAllValue = function () {
        try{
            var len,
                all = [];
            if(mode === "normal"){
                len = store.length;
                while (len--) {
                    all.push({key: store.key(len), data: store.getItem(store.key(len))});
                }
            }
            else{
                store.load(localname);
                var attributes = store.XMLDocument.documentElement.attributes;
                len = attributes.length;
                while (len--) {
                    all.push({key: attributes[len].xml.match(/^\w*/)[0], data: attributes[len].xml.replace(/^\w*=/, "").replace(/\"/g,"")});
                }
            }
            return all;
        }
        catch(e){
            return null;
        }
    }

    _storage.key = function (num) {
        if(typeof num !== "number"){
            return null;
        }
        if(num > this.getLength() - 1){
            return null;
        }
        try{
            if(mode === "normal"){
                return store.key(num);
            }
            else{
                store.load(localname);
                var attributes = store.XMLDocument.documentElement.attributes;
                return attributes[num].xml.match(/^\w*/)[0];
            }
        }
        catch(e){
            return null;
        }
    }

    _storage.removeItem = function (key) {
        if(typeof key !== "string"){
            return null;
        }
        if (key) {
            var data = undefined;
            try{
                if(mode === "normal"){
                    data = store.getItem(key);
                    store.removeItem(key);
                }
                else{
                    store.load(localname);
                    data = store.getAttribute(key);
                    store.removeAttribute(key);
                    store.save(localname);
                }
                return data;
            }
            catch(e){
                return null;
            }
        } 
        else {
            return null;
        }
    }

    return _storage;
}