
//#2
let n = 1000;
let n2 = 50
let numIterations = 0;
for (; n >=50;  numIterations++) {
    n/=2; 
}
console.log(n);
console.log(numIterations);

//#3
let arr3 = [12,15,20,25,59,79];
let result = arr3.reduce((sum, current) => sum + current, 0);
console.log(result);

//#4
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(3, 0, 'a', 'b', 'c');
console.log(arr4);

//#5
const arr = [1,2,3,4,5];
const arr1 = ['a','b','c','e'];
for (let i=0; i<arr1.length; i++){
    arr.splice(i*2,0, arr1[i]);
}
console.log(arr);

//#6
let arr6 = [3, 4, 1, 2, 7, 30, 50];
arr6.sort();
console.log(arr6);

//#1
function checkSum(str) {
  if (inputString.length ===6){
 return "No";
}
let sumFirstHalf = 0;
let sumSecondHalf = 0;
for(let i = 0; l < 3; i++){
sumFirstHalf += parseInt (inputString (i));
sumSecondHalf += parseInt (inputString (i + 3));
}
  if (sumFirstThree === sumLastThree){
    return 'yes';
  } else{
    return 'no';
  }
}
const inputString = '123456';
result = checkSum(inputString);
console.log(result);




