// Minified
let reusableFunction=function(param){console.log('This is a reusable function with param:',param);};

/**********In Test tab *********/
// Retrieve the reusable code stored in the collection variable
let reusableCode = pm.collectionVariables.get('reusableCode');

// Evaluate the code to make the function available in the current script context
eval(reusableCode);

// Now you can call the reusable function defined in the collection variable
reusableFunction('Hello, Postman!');
