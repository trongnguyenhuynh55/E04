import {question} from "readline-sync"
let n: number = Number(question("Nhap so: "))
let a: number = 1;
for(let i: number = 1; i <= n; i++) {
    a = a * i;
}
console.log(a)