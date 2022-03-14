//optional operator
function test1(a, b, c) {
    document.write("<p> a = ".concat(a, ", b = ").concat(b, ", c= ").concat(c, "</P>"));
}
test1(20);
test1(10, 20, 30);
var user;
user = { firstname: "Aakash", phone: 156225622 };
document.write("<p>Name = ".concat(user.firstname, ", phone = ").concat(user.phone, "</P>"));
//shortcut method of defining constructor
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.display = function () {
        document.write("<p> Name = ".concat(this.name, " , Age = ").concat(this.age, "</p>"));
    };
    return Student;
}());
var s1 = new Student("barry", 50);
s1.display();
