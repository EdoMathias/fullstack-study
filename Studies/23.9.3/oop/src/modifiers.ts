class Job {
  public name: string;
  private _id: number;
  protected description: string;
  static about: string;
  private static jobNum: number = 0;

  constructor(name: string) {
    this.name = name;
    this._id = 123;
    this.description = 'job';
    Job.about = 'job class';
    Job.jobNum += 1;
  }

  printId() {
    console.log(this._id);
  }

  get id() {
    return this._id;
  }

  static get jobNumber() {
    return Job.jobNum;
  }

  private exampleForPrivateFunction() {
    return 1;
  }

  callExamplePrivate() {
    return this.exampleForPrivateFunction();
  }
  // set id(value) {
  //   if (value > 0) {
  //     this._id = value;
  //   }
  // }
}

class Developer extends Job {
  constructor(name: string) {
    super(name);
    this.description = 'Web developer';
  }
}

const job = new Job('job1');
// job['_id'] = 88; //--Don't do this!--//
console.log(job.callExamplePrivate());
console.log(job);
console.log(`Current job number: ${Job.jobNumber}`);
const job1 = new Job('job2');
console.log(`Current job number: ${Job.jobNumber}`);

//-----Shorter way to write a class------//
//--How we used to write--//
class User {
  public firstName: string;
  public lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

//--Shorter way to write--//
class User1 {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number
  ) {}
}

const user = new User('Edo', 'Mathias', 23);
const user1 = new User1('Shira', 'Mathias', 20);

console.log(user, user1);
