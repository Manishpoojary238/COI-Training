abstract class Department {
  // protected readnly id: string;
  // private name: string;
  static fiscalYear=2022;  //static property
  protected employees: string[] = [];  // since it is protected, it is not directly accesible outside class but can be accessible by child class

                   //id is set as readonly means we cant change it once it is assigned         
  constructor(protected readonly id : string, public name: string) { // instead of writing line no. 2,3,7 and 8 we can directly write it inside constructor parameter 
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name:string){  // static method can be accesible without creating class object
    return {name:name};
  }

  abstract describe(this: Department): void;   //abstract method

  addEmployee(employee: string) {
    //this.id='d2'  // error because id is readonly. we cant change it once it is assigned
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {
    console.log('IT Department -ID:' +this.id );
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {      //getter to access private member lastreport
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {      //setter to set the private member lastreport
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport=reports[0];
  }

  static getInstance() {              // using thisa we can create only on object/instance to accounting department
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }
  describe() {
    console.log('Accout Department -ID:' +this.id);
  }

  addEmployee(name: string) {  //overriding
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport=text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Poojary'); //accesing createEmployee without creating class object because it is static
console.log(employee1,Department.fiscalYear);       //accesing fiscalYear without creating class object because it is static


const it = new ITDepartment('d1', ['Manish']);

it.addEmployee('Max');
it.addEmployee('Manu');

// accounting.employees[2] = 'Anna';  //not accessible since it is private

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);

const accounting = AccountingDepartment.getInstance();
const accounting1= AccountingDepartment.getInstance(); //even if we try to create more than the 1 object or instance then it weill be same as 1st one.
console.log(accounting,accounting1) // both are same. because we cannot create different instance for accountingDepartment

accounting.mostRecentReport='Year and Report'  //calling setter
accounting.addReport('Everything Looks Fine...');
console.log(accounting.mostRecentReport);  // calling getter

accounting.addEmployee('Max');
accounting.addEmployee('Mani');
accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();




// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();