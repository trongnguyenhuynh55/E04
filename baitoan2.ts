import {question} from "readline-sync"
let n: number = Number(question("Nhap so: "))
let a: number = 0;
for(let i: number = 1; i <= n; i++) {
    a = a + 1/i;
}
console.log(a)