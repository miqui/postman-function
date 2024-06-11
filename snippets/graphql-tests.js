pm.test("Star Wars GraphQL API Contract Test (ES6)", () => {
    pm.sendRequest({
        url: pm.variables.get("graphqlEndpoint"),
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: {
            mode: 'raw',
            raw: JSON.stringify({
                query: `
                    query {
                        allFilms {
                            films {
                                title
                                director
                                releaseDate
                            }
                        }
                    }
                `
            })
        }
    }, (err, res) => {
        pm.expect(res.code).to.be.oneOf([200, 201]);
        pm.expect(err).to.be.null;

        const jsonData = pm.response.json();
        pm.expect(jsonData).to.have.property("data");
        pm.expect(jsonData.data).to.have.property("allFilms");
        pm.expect(jsonData.data.allFilms).to.have.property("films");
        pm.expect(jsonData.data.allFilms.films).to.be.an('array');

        // Spot check for "A New Hope" (using ES6 destructuring)
        const aNewHope = jsonData.data.allFilms.films.find(film => film.title === "A New Hope");
        pm.expect(aNewHope).to.be.an('object');

        const { director, releaseDate } = aNewHope; // Destructuring
        pm.expect(director).to.be.a('string'); 
        pm.expect(releaseDate).to.be.a('string'); 
    });
});
