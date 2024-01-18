function handleStringorNum(input: string | number): void {
    if (typeof input === 'string') {
         console.log(`Input is a string: ${input}`);
     } else if (typeof input === 'number') {
         console.log(`Input is a number: ${input}`);
     } else {
      
        console.log(`Input is of unknown type`);
    }
}

 
handleStringorNum("Mohdumar");  
handleStringorNum(22);  
