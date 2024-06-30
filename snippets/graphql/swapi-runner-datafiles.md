```text
query {
  person(name: "{{characterName}}") {
    name
    birthYear
    homeworld {
      name
    }
  }
}
```

```js
pm.test("Status code is 200", () => {
  pm.response.to.have.status(200);
});

pm.test("Character data is correct", () => {
  const jsonData = pm.response.json();
  pm.expect(jsonData.data.person.name).to.eql(pm.environment.get("characterName"));
  pm.expect(jsonData.data.person.birthYear).to.be.a('string');
  pm.expect(jsonData.data.person.homeworld.name).to.be.a('string');
});

```

```csv
characterName
Luke Skywalker
Darth Vader
Leia Organa
Han Solo
```
