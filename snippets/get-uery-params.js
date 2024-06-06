// Get the query parameters as an array of key-value pairs
var queryParams = pm.request.url.query.all();

// Log each query parameter to the Postman console
queryParams.forEach(function(param) {
    console.log(param.key + ": " + param.value);
});

// Example: Accessing a specific query parameter value
// Assuming you have a query parameter named 'exampleParam'
var exampleParamValue = pm.request.url.query.get('exampleParam');
console.log("Value of exampleParam: " + exampleParamValue);

// Use assertions to validate query parameters
pm.test("Check if 'exampleParam' is present", function() {
    pm.expect(exampleParamValue).not.to.be.undefined;
});
