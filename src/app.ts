// Code goes here!
// overall class "deparment"
class Department {
    // creates a class that can be used to build instances of this class later on
    // it is not an object
    // can be used to create an object, but not an object
    // publice name: string;
    private employees: string[] =[]

    // mean that employees is now a property which is only accessible from inside the class. 
    // methods inside the department class can work with employees but it cannot be accessed like 
    // accounting.employees[2] = 'Anna';
    // makes sure that employees can only be added through add employee function
    // public properties are accessible from outside the class

    // can be called to creates a class that can be used to build instances of this class later on
    // we are saving the name established in the class is going to be = to the name passed into the constructor
    constructor(private readonly id :string, public name: string){
        // read only is only in ts and insure that the property can only be set at initialization and not changed afterwards
        // will give an error if code tries to reset this property
        // helpful to be clear about your intentions to others and your future self 
        // we can deparclare private and public variables in the constructor as well
        this.name = name;
        this.id = id;
    }
    // adding a method called describe
    describe (this: Department) {
        // ^ this should always refer to an instance based on the deapartment class 
        // method body
        console.log('Deparment: ' + this.name + "," +this.id)
        // this will refer the the thing calling the method not a value from the class in which the method belongs
    }
    addEmployee(employee: string){
        this.employees.push(employee)
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// more specialized class for specialized departments
class ITDepartment extends Department{
    admins: string[];
    // the extends keyword here allows us to inhert the department class
    // can only inhert from one class
    // we can create out own new constructor that is particular to this class
    constructor(id: string, admins: string[]){
        // we still want to accept the id so we can forward that to the deparment class
        super(id, "IT");
        this.admins = admins 
        // whenever you add your own constructor from a class that you have to add super in the inherted class and execute it
        // like a function and takes the arguemns of parent class constructor 
        // you have to calss super first in your constructor before you do anyting with the this key word
    }
}

class AccountingDepartment extends Department{
    constructor(id: string, private reports: string[]){
        super(id, "Accounting");
        this.reports = reports 
    }
    addReport(text: string){
        this.reports.push(text);
    }
    printReports(){
        console.log(this.reports);
    }
}
// this works even in the the ITDepartment class is empty because it calls on the deparment class
const IT = new ITDepartment("d1", ["Valerie", "Bongo"]);
console.log(IT)
// returns ITDepartment { id: 'd1', name: 'IT', employees: [] }

// const accounting = new Department("5","Accounting");
IT.addEmployee("Val");
// accounting.addEmployee("Brody");
// want to aviod "alternative" paths to results such as 
// accounting.employees[2] = 'Anna';
// for the sake of consistency on a team, and also as functionality grows this will muck up the works even more
// ex addEmployee has further functionality that we don't want to be bypassed - this is why we would make something a private frield
// accounting.describe()
// accounting.printEmployeeInformation() 
// creating an instance of the class Department named accounting
// const accountingCopy = { name: "s", describe: accounting.describe};

const accounting = new AccountingDepartment('d2', []);
accounting.addReport("oops");
accounting.printReports()