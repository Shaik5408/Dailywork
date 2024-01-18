function concatenateOrSum(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    var elementType = typeof arr[0];
    if (elementType === 'string') {
        return arr.join('');
    }
    else if (elementType === 'number') {
        return arr.reduce(function (sum, num) { return sum + num; }, 0);
    }
    else {
        return "Unsupported element type";
    }
}
var stringArray = ["aslam", " ", "mohd"];
var numberArray = [1, 2, 13, 44, 75];
console.log(concatenateOrSum(stringArray));
console.log(concatenateOrSum(numberArray));
