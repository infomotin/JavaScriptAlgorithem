function charCount(str) {
    // make this an object to return 
    var result = {};
    // Run loop for every char get
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        };

    }
    return result;
} // now its work for niche 


function charCountP(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            // if (obj[char] > 0) {
            //     obj[char]++;
            // } else {
            //     obj[char] = 1;
            // };
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}


function isAlphaNum(char){
    var code = char.charCountP(0);
    if(!(code >47 && code < 58) && 
    !(code >64 && code < 91) && 
    !(code >96 && code < 123)){
        return false;
    }
}
