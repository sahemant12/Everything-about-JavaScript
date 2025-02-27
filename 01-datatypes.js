// Datatypes:
//     1. Number
//     2. String
//     3. Boolean
//     4. Bigint
//     5. Undefined
//     6. null
//     7. Object
//     8. Symbol

//Symbol: it is unique value all the time.
let sm1 = Symbol();
let sm2 = Symbol(); //both are different

//coresion
//implict vs explict type coercion
//type coercion: means converting value from one datatype to another.
//implict: automatic conversion by Js
//explict: manual conversion by developers


//loops
//while //do while
//for  //for in(key-value)  //for of  //for Each: iterate each element of array.

const obj = {
    name:"hemant",
    age:"21",
    hobby:"singing",
    arr:"[1, 2, 3, 4, 5, 6]",
    func(){
        let b = 12;
    }
}
const arr = [11,12,13,14,15,16];

//for in(key-value)
// for(let i in obj){
//     console.log(obj[i]+" ");
// }
// for(let j in arr){
//     // console.log(j); //0,1,2,3,4,5
//     console.log(arr[j]);   
// }


//for of(use for array)
// for(let k of arr){
//     console.log(k);   
// }


//forEach: iterate all the element
const tea = ["earl grey", "green tea", "chai", "oolong tea"];
const availableTeas = [];

tea.forEach(element => {
    if(element == "chai"){
        return;
    }
    availableTeas.push(element);
    // console.log(element);
    
});
// console.log(availableTeas);

//Primitive data-type:
//1. stored directly in the stack.
//2. Fixed size, fast, and immutable (cannot be changed).
//3. When assigned to another variable, a copy is created.
//E.g: Number, String, Boolean, null, undefined, Symbol

//Non-primitive data-type:
//1. Stored in Heap, with a reference stored in Stack.
//2. Can be modified after creation.
//3. When assigned to another variable, a reference is passed, not a copy.
//E.g: Object, Array, Function, Heap, Graph, Tree




function checkTruthValue(value){
    if(value){
        console.log("True");       
    }else{
        console.log("False"); 
    }   
}
// checkTruthValue([]); //okay: empty braces/sq bracket return true;
// checkTruthValue({});
// checkTruthValue(0);
// checkTruthValue(1);
// checkTruthValue("hemant");
// checkTruthValue("");
// checkTruthValue([1, 2, 3]);
// checkTruthValue(null); //false
// checkTruthValue(undefined); //false
// checkTruthValue(NaN); //false


let a = "100w";
const convertNum1 = Number(a); //Best practice
const convertNum2 = +a; //another way
const convertNum3 = parseInt(a); //another way
// console.log(convertNum1, convertNum2, convertNum3);