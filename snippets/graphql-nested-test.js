/**
 {
  person(id: "cGVvcGxlOjE=") {
    name
    filmConnection {
      films {
        title
      }
    }
  }
}

*/

pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response should have a person with films", function () {
  const jsonData = pm.response.json();
  const person = jsonData.data.person;
  pm.expect(person).to.be.an("object");
  pm.expect(person).to.have.property("name");
  pm.expect(person.filmConnection.films).to.be.an("array");
  person.filmConnection.films.forEach(film => {
    pm.expect(film).to.have.property("title");
  });
});
