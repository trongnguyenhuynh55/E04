import {question} from "readline-sync"
let w: number = Number(question("Nhap so: "))
let a: string = "";
for(let i: number = 1; i <= w; i++) {
    a = a + "* ";
    console.log(a)
}

