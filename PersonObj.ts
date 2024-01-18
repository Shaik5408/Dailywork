
interface Person {
  name: string
  age: number;
}

interface Worker {
  job: string;
  salary: number;
}

 function PersonAndWork(personAndWorker: Person & Worker): void {
  console.log(`Name: ${personAndWorker.name}`);
  console.log(`Age: ${personAndWorker.age}`);
  console.log(`Job: ${personAndWorker.job}`);
  console.log(`Salary: ${personAndWorker.salary}`);
}

 
const aslam: Person = { name: "aslam", age: 30 };
const eng : any = { job: "Software Engineer", salary: 80000 };
 PersonAndWork({...aslam,...eng});