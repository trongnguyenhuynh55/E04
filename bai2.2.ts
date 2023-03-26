import {question} from "readline-sync"
let n: number = Number(question("Nhap so n: "))
let a: string = "";
for(let i: number = 2; i <= n; i++) {
    if (i%2 === 0) {
        a = a +" " + String(i);
    }
}
console.log(a)
