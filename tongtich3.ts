import {question} from "readline-sync"
let n: number = Number(question("Nhap so: "))
let a: number = 0;
for(let i: number = 1; i <= n; i++) {
    if (i%2 === 0)
        a = a + i;
}
console.log(a)