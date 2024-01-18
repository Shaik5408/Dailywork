function handleStringorNum(input) {
    if (typeof input === 'string') {
        console.log("Input is a string: ".concat(input));
    }
    else if (typeof input === 'number') {
        console.log("Input is a number: ".concat(input));
    }
    else {
        console.log("Input is of unknown type");
    }
}
handleStringorNum("Mohdumar");
handleStringorNum(22);
