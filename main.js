                    //1
// let a = Number(prompt("Введите число"))

// if (a > 0) {
//     alert(a+1)
// } else {
//     alert(a)
// }

                    //2
// let a = Number(prompt("Введите число"))

// if (a > 0) {
//     alert(a+1)
// } else {
//     alert(a-2)
// }

                    //3
// let a = Number(prompt("Введите число"))

// if (a > 0) {
//     alert(a+1)
// } else if (a < 0){
//     alert(a-2)
// } else {
//     alert(a=10)
// }

                    //4
// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")
// let c = prompt("Введите третье число")

// if (a > 0 && b > 0 && c > 0) {
//     alert("Все числа положительные")
// } else if ((a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)) {
//     alert("Два числа положительные")
// } else if ((a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c > 0)) {
//     alert("Одно число положительное")
// } else {
//     alert("Все числа отрицательные")
// }

                    //5
// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")
// let c = prompt("Введите третье число")

// if (a > 0 && b > 0 && c > 0) {
//     alert("Все числа положительные")
// } else if ((a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0)) {
//     alert("Два числа положительные и одно отрицательное")
// } else if ((a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c < 0) || (a < 0 && b < 0 && c > 0)) {
//     alert("Одно число положительное и два отрицательных")
// } else {
//     alert("Все числа отрицательные")
// }

                    //6
// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")

// if (a > b) {
//     alert(a)
// } else {
//     alert(b)
// }

                    //7
// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")

// if (a < b) {
//     alert("1")
// } else {
//     alert("2")
// }

                    //8
// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")

// if (a > b) {
//     alert(a)
//     alert(b)
// } else {
//     alert(b)
//     alert(a)
// }

                    //9
// let A = prompt("Введите первое число A")
// let B = prompt("Введите второе число B")

// if (A > B) {
//     alert("A = " + B + "; B = " + A )
// } else {
//     alert("A = " + A + "; B = " + B)
// }

                    //10
// let A = Number(prompt("Введите первое число A"))
// let B = Number(prompt("Введите второе число B"))

// if (A != B) {
//     alert(A+B, A+B)
// } else {
//     alert(A=0, B=0)
// }

                    //11
// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")

// if (a != b) {
//     if (a > b){
//         alert(a, b = a)
//     } else {
//         alert(b, a = b)
//     }
// } else {
//     alert(a=0, b=0)
// }

                    //12
// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")
// let c = prompt("Введите третье число")

// if (a < b && a < c) {
//     alert(a)
// } else if (b < a && b < c) {
//     alert(b)
// } else {
//     alert(c)
// }

                    //13
// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")
// let c = prompt("Введите третье число")

// if ((a < b && a > c) || (a > b && a < c)) {
//     alert(a)
// } else if ((b < a && b > c) || (b > a && b < c)) {
//     alert(b)
// } else {
//     alert(c)
// }

                    //14
let a = prompt("Введите первое число")
let b = prompt("Введите второе число")
let c = prompt("Введите третье число")

if ((a < b && a < c) || (b > a && b > c)) {
    alert(a + "; " + b)
} else if ((a < b && a < c) || (c > a && c > b)) {
    alert(a + "; " + c)
} else if ((b < a && b < c) || (c > a && c > b)) {
    alert(b + "; " + c)
} else if ((b < a && b < c) || (a > b && a > c)) {
    alert(b + "; " + a)
} else if ((c < a && c < b) || (a > b && a > c)) {
    alert(c + "; " + a)
} else {
    alert(c + "; " + b)
}

                    //15
// let a = Number(prompt("Введите первое число"))
// let b = Number(prompt("Введите второе число"))
// let c = Number(prompt("Введите третье число"))

// if (a > b && c > b) {
//     alert(a+c)
// } else if (a > c && b > c) {
//     alert(a+b)
// } else {
//     alert(b+c)
// }

                    //16
// let A = Number(prompt("Введите первое число"))
// let B = Number(prompt("Введите второе число"))
// let C = Number(prompt("Введите третье число"))

// if (B > A && B < C) {
//     alert(2*A)
//     alert(2*B)
//     alert(2*C)
// } else {
//     alert(-1*A)
//     alert(-1*B)
//     alert(-1*C)
// }