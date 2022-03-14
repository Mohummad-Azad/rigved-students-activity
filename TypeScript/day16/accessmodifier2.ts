class Person {
    protected age : number ;
    public name : string ;
    constructor(name:string, age:number){
        this.name = name ;
        this.age = age ;
    }

    class Employee extends Person {
        constructor (name , age) {
            super (name , age);
        }
        printData() : void {
            document.write(`<p>Name = ${this.name} , Age = ${this.age}</p>`);
        }
    }

    let e = new Employee("Asim" , 21);
    e.printData();
    e.name = "Sameer" ;
    //e.age="30"; //this will give error bcz age is protected
    e.printData();

