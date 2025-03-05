

let userDetails = {
    name: "hemant sah",
    age: 21,
    getDetails: function(){
        console.log(`My name is ${this.name} and age is ${this.age}`);        
    }
}
// userDetails.getDetails();

let userDetails2 = {
    name:"Sourav singh"
}

// userDetails.getDetails.call(userDetails2); //My name is Sourav singh and age is undefined
//it will execute the fn immediately(run immediately)
//here, getDetails() have current object: userDetails2


const getDetail = userDetails.getDetails.bind(userDetails2); //My name is Sourav singh and age is undefined
//it will make a copy of userDetails and binds it to userDetails2 object and return a fn(new).
//getDetail();


//Another E.g:
const displayDetails = function(place1, place2){
    console.log(`name:${this.name}, age: ${this.age}, ${place1}, ${place2}`);  
}

//call
// displayDetails.call(userDetails); //passing the "userDetails object"
// displayDetails.call(userDetails, "NY", "SF"); //we can also pass the argument.

//bind
const result = displayDetails.bind(userDetails, "NY", "SF");
// result();
//The only difference between call and bind is call immediately execute the fn whereas bind return a new fn.
// The only difference between call and apply is the way how we pass the argument.
displayDetails.apply(userDetails, ["NY", "SF"]); //in apply we pass the array which contains our argument.
