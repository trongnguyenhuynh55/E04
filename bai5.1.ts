import {question} from "readline-sync"
let a: number = Number(question("Nhap so bat dau: "))
let b: number = Number(question("Nhap so ket thuc: "))
let chan: string = "";
let le: string = "";
for(let i: number = a; i <= b; i++) {
    if (i%2 === 0) {
        chan = chan + String(i) + " ";    
    }
    else
        le = le + String(i) + " ";   
}
console.log("Chan: " + chan)
console.log("Le: " + le)