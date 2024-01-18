interface Person {
    name: string;
    age: number;
  } 
  interface Worker {
    job: string; 
    salary: number;
  }
   type Persons = Person & Worker;
  const P1: any = {
    name: "aslam",
    age: 23,
    job: "Software Engineer",
    salary: 80000,
  };
  console.log(P1);
