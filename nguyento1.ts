import {question} from "readline-sync"
let n: number = Number(question("Nhap so: "))
let flag: number = 1;
for(let i: number = 2; i <= n - 1; i++) {
    if (n%i === 0) {
        flag = 0;
    }
}
if (flag === 1)
    console.log("Yes")
else    
    console.log("No")