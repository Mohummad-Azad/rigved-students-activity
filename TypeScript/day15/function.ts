function test1(a:number, b:number): void {
    document.write(`<p>test1() a =${a}, b =${b}</p>`);
}

function test2(a:number, b:number): number {
    document.write(`<p>test2() a= ${a}, b =${b}</p>`);
    return (a+b);
}

function test3(a:number, b:number): string | number {
    if((a+b) < 0) {
        return "Result is negative number : " +(a+b);
    }
    else{
        return (a + b);
    }
}

test1(20, 50);

let r = test2(30, 40);
document.write(`<p>Result from Test2 : ${r}</p>`);

let r2 = test3(r, -600);
document.write(`<p> Result Form Test 3: ${r2}</p>`);

let emp : {firstname: string, age: number};
emp = {firstname : "Alex", age : 35}

document.write(`<p>FirstName : ${emp.firstname}, Age: ${emp.age}</P>`);