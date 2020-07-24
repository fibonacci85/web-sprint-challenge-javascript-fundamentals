// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: functions have access to their function scope and if nothing is there they can reach out. 


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


let count = 0;

function summation (param) {  
for (i=0;i<param;i++){
  summationNum = param + param +2;
}
return summationNum;
}

console.log (summation(4))
