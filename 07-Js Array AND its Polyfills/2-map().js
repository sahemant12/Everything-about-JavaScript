//1. does not change the original array.   
//2. does not execute the function for empty elements.  
//3. creates a new array from calling a function for every array element.

//syntax: array.map(function(currentValue, index, arr), thisValue);

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]
// console.log(numbers);

//e.g:2
const rannumbers = [65, 44, 12, 4];
const newObj = {
    name:"sah",
    age:"20",
    arr:"[1, 2, 3, 4, 5, 6]",
    fun2(){
        String = "hello"
    }
}
// const newArr = rannumbers.map((num, index, arr)=>{
//     console.log(num, index, arr);
//     return index*10;
// });
// const newArr = newObj.map((num, index, arr)=>{   //not work with object
//     console.log(num, index, arr);
//     return num;
// });
// console.log(newArr);


//polyfills of .map()
const arr = [1, 3, 5, 8];
// const newArr = arr.map((e)=>e*2);
// console.log(newArr);

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(myFn){
        //return newArray
        const mapArr = [];
        for(let i=0; i<this.length; i++){
            const value = myFn(this[i], i, this);            
            mapArr.push(value);
        }
        return mapArr;
    }
}
const result = arr.myMap((currValue, index, mainArr)=>{
    return currValue * 2;
})
console.log(result);
