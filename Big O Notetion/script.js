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

function countDown(n) {
    console.log("GoingUp");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("going Down");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j)
    }
}


function looping(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                for (let l = 0; l < n; l++) {
                    console.log(i, j, k, l);
                }
            }
        }
    }
}
t1 = performance.now();
looping(10);
t2 = performance.now();
console.log((t2 - t1) / 1000)

t1 = performance.now();
looping(10);
t2 = performance.now();