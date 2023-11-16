 
 class Calculator {
async add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
async substract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
 async multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;

}
async devision (firstNumber, secondNumber) {
        return firstNumber / secondNumber;
}

  async  presentage (firstNumber, percent){
    return (firstNumber * percent) /100;
}
 }
describe('Calculator',  () => {

test.each([
    [100,50,50],
    [100,20,20],
   ])(`(%i * %i)/100, equal %i`,  async (firstNumber,  percent, result) => {
    await expect((firstNumber * percent)/100).toEqual(result)
   
 })
});



 module.exports = Calculator;
