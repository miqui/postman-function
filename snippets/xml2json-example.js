// Get the response body as a string
var responseBody = pm.response.text();

// Parse the XML response
var jsonResponse = xml2Json(responseBody);

// Log the JSON response to the Postman console for inspection
console.log(jsonResponse);

// Access specific elements from the JSON response
var status = jsonResponse.response.status;
var itemId = jsonResponse.response.data.item.id;
var itemName = jsonResponse.response.data.item.name;

// Log the extracted values
console.log("Status: " + status);
console.log("Item ID: " + itemId);
console.log("Item Name: " + itemName);

// Use assertions to verify the response
pm.test("Check if response status is success", function() {
    pm.expect(status).to.eql("success");
});

pm.test("Check if item ID is 1", function() {
    pm.expect(itemId).to.eql("1");
});

pm.test("Check if item name is 'Item Name'", function() {
    pm.expect(itemName).to.eql("Item Name");
});
