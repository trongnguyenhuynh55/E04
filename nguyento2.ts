import {question} from "readline-sync"
let m: number = Number(question("Nhap so: "))
let a: string = "";
for(let j: number = 1; j <= m; j++) {
    let flag: number = 1;
    for(let i: number = 2; i <= j - 1; i++) { 
        if (j%i === 0){
            flag = 0;
        }
    }
    if (flag === 1)
        a = a + String(j) + " ";
}
console.log(a)