//1. The forEach() method calls a callback function for each element in an array.
//2. The forEach() method is not executed for empty elements.
//3. No Return Value: It does not return a new array or any value; it returns undefined.

//syntax: array.forEach(callback(currentValue, index, array), thisArg);

const fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach((currvalue, index, arr)=>{
//     console.log(`Element at index ${index}: ${currvalue}`);
// })

//polyfills: forEach()
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this;

        for(let index = 0; index < originalArr.length; index++){
            userFn(originalArr[index], index, originalArr);           
        }
    }
}
const result = fruits.myForEach((currvalue, index, arr)=>{
    console.log(`Element at index ${index}: ${currvalue}, ${arr}`);
})
console.log(result);
