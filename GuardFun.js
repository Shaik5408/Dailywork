function isString(value) {
    return typeof value === 'string';
}
function processString(input) {
    if (isString(input)) {
        var capitalString = input.toUpperCase();
        console.log("Capitalized String: ".concat(capitalString));
        return capitalString;
    }
    else {
        console.log('Input is not a string.');
    }
}
var exNumber = 42;
var exString = 'aslam';
processString(exNumber);
processString(exString);
