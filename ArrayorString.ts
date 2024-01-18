function concatenateOrSum(arr) {
     
    if (arr.length === 0) {
        return "Array is empty";
    }

     
    const elementType = typeof arr[0];
 
    if (elementType === 'string') {
         return arr.join('');
    } else if (elementType === 'number') {
         return arr.reduce((sum, num) => sum + num, 0);
    } else {
         return "Unsupported element type";
    }
}
 
const stringArray = ["aslam", " ", "mohd"];
const numberArray = [1, 2, 13, 44, 75];

console.log(concatenateOrSum(stringArray));  
console.log(concatenateOrSum(numberArray));  
