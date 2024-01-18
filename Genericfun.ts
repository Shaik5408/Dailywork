function revArray<T>(array: T[]): T[] {
    return array.reverse();
}

const ArrayObj = [91,92,93,94,95];
const reversedArray = revArray(ArrayObj);
console.log(reversedArray);  
