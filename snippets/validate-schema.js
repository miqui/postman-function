let validateSchema = function(response, schema) {
    const Ajv = require('ajv');
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(response);

    if (!valid) {
        console.log(validate.errors);
        throw new Error('Schema validation failed');
    } else {
        console.log('Schema validation passed');
    }
};

// Invoke as

// Retrieve the reusable code stored in the collection variable
let reusableCode = pm.collectionVariables.get('validateSchema');

// Evaluate the code to make the function available in the current script context
eval(reusableCode);

// Define your response schema
let schema = {
    "type": "object",
    "properties": {
        "name": { "type": "string" },
        "age": { "type": "integer" }
    },
    "required": ["name", "age"]
};

// Get the response JSON
let responseJson = pm.response.json();

// Validate the response against the schema
validateSchema(responseJson, schema);
