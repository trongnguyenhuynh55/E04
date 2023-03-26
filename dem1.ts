import {question} from "readline-sync"
let n: number = Number(question("Nhap so bat dau: "))
let m: number = Number(question("Nhap so ket thuc: "))
let dem: number = 0;
for(let i: number = n; i <= m; i++) {
    dem = dem + 1;
}
console.log(dem)