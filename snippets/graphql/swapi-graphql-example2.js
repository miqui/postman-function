// Test that the response is successful
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Test that the response contains data
pm.test("Response has data", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('data');
});

// Test that people data is returned
pm.test("People data is returned", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data).to.have.property('allPeople');
    pm.expect(jsonData.data.allPeople).to.have.property('people');
    pm.expect(jsonData.data.allPeople.people).to.be.an('array').that.is.not.empty;
});

// Test specific fields for a person
pm.test("Person has expected fields", function () {
    const jsonData = pm.response.json();
    const firstPerson = jsonData.data.allPeople.people[0];
    pm.expect(firstPerson).to.have.property('name');
    pm.expect(firstPerson).to.have.property('birthYear');
    pm.expect(firstPerson).to.have.property('gender');
});

// Test that Luke Skywalker is in the results
pm.test("Luke Skywalker is in the results", function () {
    const jsonData = pm.response.json();
    const people = jsonData.data.allPeople.people;
    const lukeSkywalker = people.find(person => person.name === "Luke Skywalker");
    pm.expect(lukeSkywalker).to.not.be.undefined;
});

// Test the total count of people returned
pm.test("Correct number of people returned", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data.allPeople.totalCount).to.be.above(0);
});
