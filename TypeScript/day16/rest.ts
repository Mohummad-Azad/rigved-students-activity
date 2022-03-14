function sum1(x, ...y) {
    let result = x;
    for (let i of y) {
        result += i ; 
    }
    return result ;
}

function sum2(x: number , ...y: number[]): number {
    let result =x ;
    for (let i of y){
        result = result + i ;

    }
    return result ;
}

let r =sum1 (10, "20", "30", 50);
document.write(`<p> Resuult = ${r} </p>`);

r = sum2(10, 20, 30, 40, 50);
document.write(`<p> Result = ${r} </p>`);