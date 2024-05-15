## In pre-request script

```js
const faker = require('faker');

const userProfile = {
    id: faker.datatype.uuid(),
    name: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
    },
    email: faker.internet.email(),
    address: {
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode()
    },
    phone: faker.phone.phoneNumber(),
    company: {
        name: faker.company.companyName(),
        catchPhrase: faker.company.catchPhrase(),
        bs: faker.company.bs()
    },
    website: faker.internet.url(),
    avatar: faker.image.avatar(),
    bio: faker.lorem.paragraphs(3)
};

pm.environment.set("userProfile", JSON.stringify(userProfile));

```
