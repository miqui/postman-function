/**
{
  "query": `
    query {
      allPeople {
        people {
          name
          height
          mass
          gender
          homeworld {
            name
          }
        }
      }
    }
  `
}
*/

pm.test("Validate Response Structure", function() {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('data');
    pm.expect(jsonData.data).to.have.property('allPeople');
    pm.expect(jsonData.data.allPeople).to.have.property('people').that.is.an('array');
});


pm.test("Validate People Array is Not Empty", function() {
    const jsonData = pm.response.json();
    pm.expect(jsonData.data.allPeople.people).to.be.an('array').that.is.not.empty;
});


pm.test("Validate Properties of Each Person", function() {
    const jsonData = pm.response.json();
    const people = jsonData.data.allPeople.people;

    people.forEach(person => {
        pm.expect(person).to.have.property('name').that.is.a('string');
        pm.expect(person).to.have.property('height').that.is.a('string');
        pm.expect(person).to.have.property('mass').that.is.a('string');
        pm.expect(person).to.have.property('gender').that.is.a('string');
        pm.expect(person).to.have.property('homeworld').that.is.an('object');
        pm.expect(person.homeworld).to.have.property('name').that.is.a('string');
    });
});

pm.test("Validate Specific Person Exists", function() {
    const jsonData = pm.response.json();
    const people = jsonData.data.allPeople.people;

    const personExists = people.some(person => person.name === 'Luke Skywalker');
    pm.expect(personExists).to.be.true;
});
