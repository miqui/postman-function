//let response = pm.response.json();

pm.test(“JSON Schema validation”, () => {

  pm.response.to.have.jsonSchema(schema);
});
