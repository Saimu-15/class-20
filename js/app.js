// odd/even number checkup-1
var num = 4;
if(num % 2 == 0) {
    document.write('even');
    document.write('<br>');
} else {
    document.write('odd');
}
console.log();

// odd/even number checkup-2
// for(var a = 1; a <= 50; a++) {
//     if(a % 2 == 0) {
//         document.write(a + "<br>");
//     }
// }

// mathematical operation with function
// addition
function sum(a,b) {
   document.write(a + b);
   document.write('<br>')
}
sum(45, 55)

// Subtraction
function substraction(a,b) {
    document.write(a - b);
    document.write('<br>')
 }
 substraction(55, 45)

//  Multiplication
function Multiplication(a,b) {
    document.write(a * b);
    document.write('<br>')
 }
 Multiplication(10, 10)

//  Division
function Division(a,b) {
    document.write(a / b);
    document.write('<br>')
 }
 Division(10, 10)

//  Modulus
function Modulus(a,b) {
    document.write(a % b);
    document.write('<br>')
 }
 Modulus(20, 15)

//  Exponentiation 
function Exponentiation (a,b) {
    document.write(a ** b);
    document.write('<br>')
 }
 Exponentiation (10, 10)