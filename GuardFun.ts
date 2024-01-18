 function isString(value: any): value is string {
    return typeof value === 'string';
  }
  
  function processString(input: any): string | void {
    if (isString(input)) {
       
      const capitalString = input.toUpperCase();
      console.log(`Capitalized String: ${capitalString}`);
      return capitalString;
    } else {
       
      console.log('Input is not a string.');
     
    }
  } 
  const exNumber = 42;
  const exString='aslam';
  processString(exNumber);  
  processString(exString);