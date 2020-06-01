function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(60))


function addUpTo(n) {
    return n * (n + 1) / 2;


    //explaen n Adding = 1+2+3+--------+(n-1)+n
    //          n adding = n +(n-1)+(n-2)+(n-3)+-----+2+1
    //          sum(2n) = (n+1)+(n+1)+(n+1)+------+(n+1)
    //                  n = n*(n+1)/2
}

console.log(addUpTo(9))



function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
var t1 = performance.now();
addUpTo(10000000000)
var t2 = performance.now();
console.log((t1 - t2) / 1000)


function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
var t1 = performance.now();
addUpTo(10000000000)
var t2 = performance.now();
console.log((t1 - t2) / 1000)