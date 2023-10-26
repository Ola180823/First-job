function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + 1);
}

//#1
function getPromiseWithRandomDelay( ){
  const randomNum = (1,5)
 return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomNum);
    }, 1000);
  });
}
const promise1 = getPromiseWithRandomDelay(1);
const promise2 = getPromiseWithRandomDelay(2);
const promise3 = getPromiseWithRandomDelay(3);
Promise.race([promise1,promise2,promise3])
.then((data) => {
  console.log(data);
})
    .catch(err  => {
       console.log(err);  
})

         //#2
      function getNum() { 
        return new Promise((res,rej) => {             
                setTimeout(() => {   
                  const randomNum =  (1,5);
                   res(randomNum );
                },3000);  
         });
      }   
      async function waitResult() {
        try {
      const randomNum = await getNum();
      const squaredNum = randomNum **2;
      console.log( randomNum );
        console.log( squaredNum );
      }
      catch(err)   {
       console.log(err)  
          }
        }
        waitResult()
       
        
//#3
function getNum1(){
  return new Promise((res, rej) => {
    setTimeout(() => { 
    const randomNum =  Math.floor(Math.random()*(max - min +1))+min;
    res(randomNum)
  }, 1000);
  });
}
async function waitSumRandomNum() {
  try{
const PromiseNum1 = await getNum(1, 5, 3000)
const Psomisenum2 = await getNum(6, 10,5000)
const sum = num1 + num2;
  console.log(sum);
}
    catch(err)  {
       console.log(err);  
}
}
waitSumRandomNum();

        
