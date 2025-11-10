/**
 * variable defination
 * 
 * let --> instend of var
 * const -->  for define the constants
 * 
 * 
 * Conditions
 * 
 * ternery operator ---> let result = (condtion) ? trueCase : falseCase
 * 
 * condition&& trueCase
 * 
 * let user = null??'demo' //or / defualt value
 * 
 * 
 * 
 * Arrow function 
 * 
 * (parameters)=>{
 * 
 * function code
 * 
 * }
 * 
 */


fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    
    for (const product of data) {
        
    }
    
  });





