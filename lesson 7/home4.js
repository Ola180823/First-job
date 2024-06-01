
//#1
const Array = [1,2,3,4,5,6];
function reverseArray(arr){
    return arr. reverse();
}
const newArray = reverseArray(Array);
console.log(newArray);

//#2
const numbers = [3,67,15,28,100];
function findMaxvalue(arr) {
    return Math.max(...arr);
}
const maxNumber = findMaxvalue(numbers);
console.log(maxNumber);

//#3
//function getFibonachi(N, M) {
  //const fibonachiArray = [];
  //for(let i = N; i < N + M; i++){
  //}
//const N = 5;
//const M = 10;
  // return number <=1 ? number:getFibonachi(number- 1)+ getFibonachi( number- 2); 
//};
//console.log(getFibonachi(N, M));
// чё то не пролучается эта фибоначчи

//#4
//const numStr1 = number1.toString();
//const numStr2 = number2.toString();
//function () {
  //   for (let i = 0; i < 4; i++);
  //знаю что надо преобразовать числа в строки а потом их перебрать в строках
  //подсчетать совпадающие цифры и значения 
  // но не знаю какую функцию использовать и как записать правильно 
    
//}
//console.log();

//#5 
const Array1 = [6,2,4,1,3,5,7,9,8 ];
function sortArray1(a,b) {
    return arr.sort ((a, b) => a-b);//по убыванию (b-a)
}
 console.log(Array1.sort());

 const Array2 = ["Ola",  "Ann" , "Masha"]; 
 function sortArray2(a,b) {
    return arr.sort ((a, b) => b.localeCompare(a));//
 }
 console.log(Array2.sort());

//#6
const arr = [1,1,2,2,3,3];
const unique = arr.filter((x, i) => arr.indexOf(x) ===i);
console.log(unique );

const dupMixed = ['ola', 1, 'ola', 2, 1, 2, 3];
console.log(new Set(dupMixed));