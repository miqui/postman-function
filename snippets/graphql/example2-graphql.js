// Set the GraphQL query
const query = `
query {
  allPeople {
    people {
      name
      homeworld {
        name
      }
      species {
        name
      }
    }
  }
}
`;

// Set the GraphQL variables (leave empty for this query)
const variables = {};

// Set up the request
pm.sendRequest({
  url: 'https://swapi.graph.cool/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: {
    mode: 'graphql',
    query: query,
    variables: variables
  }
}, (error, response) => {
  // Test for successful response
  pm.test('Status code is 200', () => {
    pm.expect(response.code).to.equal(200);
  });

  // Test for valid response data
  pm.test('Response has data', () => {
    const responseData = response.json().data;
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.allPeople).to.be.an('object');
    pm.expect(responseData.allPeople.people).to.be.an('array');
  });

  // Test for specific person data
  pm.test('Luke Skywalker data is correct', () => {
    const lukeSkywalker = response.json().data.allPeople.people.find(person => person.name === 'Luke Skywalker');
    pm.expect(lukeSkywalker).to.be.an('object');
    pm.expect(lukeSkywalker.homeworld.name).to.equal('Tatooine');
    pm.expect(lukeSkywalker.species.name).to.equal('Human');
  });
});
