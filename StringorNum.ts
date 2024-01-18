function StringorNum(input: string | number): number {
    if (typeof input === 'string') {
         
        return input.length;
    } else {
        
        return input * input;
    }
}
 
//const res1= StringorNum("aslam");
//console.log(res1);  

const res = StringorNum(94);
console.log(res); 
