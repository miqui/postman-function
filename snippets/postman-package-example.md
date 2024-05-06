# Postman package feature

```js

function validateStatusCode(response, code) {
  return pm.test('Return status code: ${code}`, () => {
    pm.expect(response.code).to.eq(code);
  })
}

function validateSchema(response, schema) {
   pm.test("Validate JSON respinse against a JSON schema", () => {
     response.to.have.jsonSchema(schema)
   });
}

module.exports = {
  validateStatusCode,
  validateSchema
}
```

In the request's ```Scripts``` tab:
```js
const myPackage = pm.require('@postman/ok-status-code');
const response = pm.response;

myPackage.validateStatusCode(response, 200);

const schema = {
  type: "object",
  properties: {
    message: { type: "string" }
  },
  required: ["message"]
};

myPackage.validateSchema(response, schema);
```
