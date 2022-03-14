//optional operator
function test1(a : number, b?:number, c?:number) {
    document.write(`<p> a = ${a}, b = ${b}, c= ${c}</P>`);
}
test1(20);
test1(10, 20, 30);

let user : {firstname : string , phone : number, lastname?: string} ;
user = {firstname: "Aakash", phone: 156225622}
document.write(`<p>Name = ${user.firstname}, phone = ${user.phone}</P>`);

//shortcut method of defining constructor

class Student {
    constructor (public name : string , public age : number) {}
    display() : void {
        document.write(`<p> Name = ${this.name} , Age = ${this.age}</p>`);
    }
}
let s1 = new Student("barry" , 50);
s1.display();