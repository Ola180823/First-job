
const Calculator = require ('./calculator2.test.js')

describe('Calculator',  () => {

   test.each([
    [2,3,5],
    [3,4,7],
    [6,9,15],
    ])(`%i + %i equal %i`, async (firstNumber, secondNumber, result) => {
    await expect(firstNumber + secondNumber).toEqual(result)
    })
    test.each([
        [5,3,2],
        [6,3,3],
    ])(`%i - %i equal %i`, async (firstNumber, secondNumber, result) => {
        await expect(firstNumber - secondNumber).toEqual(result)
    })
    test.each([
        [2,3,6],
        [3,0,0],
    ])(`%i * %i equal %i`, async (firstNumber, secondNumber, result) => {
        await expect(firstNumber * secondNumber).toEqual(result)
    })
    test.each([
        [6,2,3],
        [9,3,3],
    ])(`%i / %i equal %i`, async (firstNumber, secondNumber, result) => {
        await expect(firstNumber / secondNumber).toEqual(result)
    })
    test.each([
        [-2,2,-4],
        [-5,-3,-2],
    ])(`%i - %i equal %i`, async (firstNumber, secondNumber, result) => {
       await expect(firstNumber - secondNumber).toEqual(result)
    })
    test.each([
       [2.5,4,10],
    ])(`%i * %i equal %i`, async (firstNumber, secondNumber, result) => {
      await expect(firstNumber * secondNumber).toEqual(result)
    })
    test.each([
        [6, 2.5, 2.4],
    ])(`%i / %i equal %i`, async (firstNumber, secondNumber, result) => {
        await expect(firstNumber / secondNumber).toEqual(result)
   })
 
});
