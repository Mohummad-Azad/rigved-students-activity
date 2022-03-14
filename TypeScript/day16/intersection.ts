interface A {
    name : string ;

}
interface B {
    phone : number ;
}

//obj 1 is of A & B both
let obj1 :A & B ;
obj1 ={name : "Akash", phone : 16464613465}
document.write(`<p> Name = ${obj1.name}, Phone = ${obj1.phone}</p> `)