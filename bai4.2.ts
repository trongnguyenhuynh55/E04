import {question} from "readline-sync"
let w: number = Number(question("Nhap hang ngang: "))
let h: number = Number(question("Nhap hang doc: "))
for(let j: number = 1; j <= h; j++) {
    let a: string = "";
    for(let i: number = 1; i <= w; i++) {
        a = a + "* ";
    }
console.log(a)
}