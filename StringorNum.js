function StringorNum(input) {
    if (typeof input === 'string') {
        return input.length;
    }
    else {
        return input * input;
    }
}
//const res1= StringorNum("aslam");
//console.log(res1);  
var res = StringorNum(94);
console.log(res);
