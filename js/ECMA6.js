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
 * object
 * 
 * dusrtucting object --> let {key1,key2} = object
 * 
 * array
 * 
 * map ==> let pricesAfterVatUsingMapFuction = prices.map(price=> price*1.14)
 * filter ==> let pricesAfterVatUsingMapFuction = prices.filter(price=> price>500)
 * 
 * dusrtucting object --> let [var1,var2] = array
 * 
 * 
 * 
 * 
 * 
 */


let prices = [100,115,900,200];

let filteredPrice = [];

for (const element of prices) {
    (element>500)&&filteredPrice.push(element)

    // if (element>500) {
    //     filteredPrice.push(element)
    // }
}




