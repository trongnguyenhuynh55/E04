import {question} from "readline-sync"
let n: number = Number(question("Nhap so n: "))
let a: string = "";
for(let i: number = 1; i <= n; i++) {
    if (i%2 !== 0) {
        a = a +"* "    
    }
    else
        a = a +"$ "
}
console.log(a)