let x = 10;
let y = 40;
let z = x+y ;
console.log(`z = ${z}`);
setTimeout(() => {
    console.log('inside callback');
}, 0);
console.log('end of the program');