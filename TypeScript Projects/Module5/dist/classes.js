"use strict";
class Department {
    //id is set as readonly means we cant change it once it is assigned         
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // since it is protected, it is not directly accesible outside class but can be accessible by child class
        // this.id = id;
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        //this.id='d2'  // error because id is readonly. we cant change it once it is assigned
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// protected readnly id: string;
// private name: string;
Department.fiscalYear = 2022; //static property
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department -ID:' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('Accout Department -ID:' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Poojary'); //accesing createEmployee without creating class object because it is static
console.log(employee1, Department.fiscalYear); //accesing fiscalYear without creating class object because it is static
const it = new ITDepartment('d1', ['Manish']);
it.addEmployee('Max');
it.addEmployee('Manu');
// accounting.employees[2] = 'Anna';  //not accessible since it is private
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
const accounting = AccountingDepartment.getInstance();
const accounting1 = AccountingDepartment.getInstance(); //even if we try to create more than the 1 object or instance then it weill be same as 1st one.
console.log(accounting, accounting1); // both are same. because we cannot create different instance for accountingDepartment
accounting.mostRecentReport = 'Year and Report'; //calling setter
accounting.addReport('Everything Looks Fine...');
console.log(accounting.mostRecentReport); // calling getter
accounting.addEmployee('Max');
accounting.addEmployee('Mani');
accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
