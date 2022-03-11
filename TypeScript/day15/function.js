function test1(a, b) {
    document.write("<p>test1() a =".concat(a, ", b =").concat(b, "</p>"));
}
function test2(a, b) {
    document.write("<p>test2() a= ".concat(a, ", b =").concat(b, "</p>"));
    return (a + b);
}
function test3(a, b) {
    if ((a + b) < 0) {
        return "Result is negative number : " + (a + b);
    }
    else {
        return (a + b);
    }
}
test1(20, 50);
var r = test2(30, 40);
document.write("<p>Result from Test2 : ".concat(r, "</p>"));
var r2 = test3(r, -600);
document.write("<p> Result Form Test 3: ".concat(r2, "</p>"));
var emp;
emp = { firstname: "Alex", age: 35 };
document.write("<p>FirstName : ".concat(emp.firstname, ", Age: ").concat(emp.age, "</P>"));
