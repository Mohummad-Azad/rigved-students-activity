var coord = { x: 10, y: 20 };
var axis3d = { x: 10, y: 20, z: 30 };
function printCoord(pt) {
    document.write("<p>x = ".concat(pt.x, ", y =").concat(pt.y, "</p> "));
}
function print3DCood(pt3) {
    document.write("<p> x= ".concat(pt3.x, ", y = ").concat(pt3.y, ", z = ").concat(pt3.z, "</p>"));
}
printCoord(coord);
print3DCood(axis3d);
