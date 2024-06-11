/**
  [
   {
    "id": 123,
    "name": "joe"
   },
   {
    "id": 234,
    "name": "smith"
   },
  ]
*/

pm.test("GET /users - Validate user list", () => {
    const users = pm.response.json();
    
    pm.test("Status code is 200", () => {
        pm.response.to.have.status(200);
    });
    
    pm.test("Response should be an array", () => {
        pm.expect(users).to.be.an('array');
    });
    
    pm.test("Each user should have an id and name", () => {
        users.forEach(user => {
            pm.expect(user).to.have.property('id').that.is.a('number');
            pm.expect(user).to.have.property('name').that.is.a('string');
        });
    });
});
