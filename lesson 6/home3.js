

//#3(a)
function splitNumberIntoParts(total, count)  {
  const result = [];
  for (let i = 0; i < count - 1; i++) {
  const min = (Math.min(1));
  const max = (Math.max(15));
  const randomPart = Math.floor(Math.random()* (max- min + 1)) + min;
    result.push(randomPart);
    total -= randomPart;
  }
  result.push(total);
  return result;
}
const total = 15;
const count = 3;
const integerParts = splitNumberIntoParts(total, count);
console.log(integerParts);


//#3(B)
//function splitNumberIntoParts(total, count)  {
  //const result = [];
  //for (let i = 0; i < count - 1; i++) {
  //const min = (Math.min(0.01));
  //const max = (Math.max(15));
  //const randomPart = Math.floor(Math.random()* (max- min + 1)) + min.toFixed(2)
    //result.push(parseFloat).toFixed(2);
   // total -= randomPart;
  //}
  //result.push(total);
  //return result;
//}
//const total1 = 15;
//const count1 = 3;
//const integerParts2 = splitNumberIntoParts(total, count);
//console.log(integerParts);


//#2
function countFriday13() {
let startDate =new  Date('2000-01-01');  
let endDate = new Date('2023-10-10');
let count = 0;

  while(startDate <= endDate) {
    if (startDate.getDate('2000-01-01') === 13 &&
    startDate.getDay('2023-10-10') === 5) {
      count ++;
    }
    startDate.setMonth(startDate.getMonth()+ 1);
  }
  return count;
}
const Friday13Count = countFriday13();

 console.log(Friday13Count);
 
   
//#1
//function throwcube {
//return Math.floor(Math.random() * 6) + 1
//}
//let player1 = 0;
//let player2 = 0;
//for(let i = 0; i < 3; i++ ){
  //result
  //const  player1 = throwcube(); 
  //const  player2 = throwcube();
  //sum = (result (player1 +=  player2) )
//}
//if(sum (player1) > sum  (player2)){
  //console.log(player1)
//} else if 
  //(sum (player2) > sum (player1) )
  //console.log(player2);
//} else  if {
//console.log (Ничья!)
//}









 