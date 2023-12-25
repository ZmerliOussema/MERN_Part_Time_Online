const express = require("express")
const app = express()
const port = 8000
const {faker} = require(("@faker-js/faker"))

const userObject = {
    _id: faker.string.uuid(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName()
}

const companyObject ={
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country:faker.location.country()
    },
}

const createUser = () => {
    return userObject
}

const createCompany = () => {
    return companyObject
}

const newFakeUser = createUser()
const newFakeCompany = createCompany()
// console.log(newFakeCompany)

app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser)
})

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany)
})

app.get("/api/user/company", (req, res) => {
    const result = [newFakeUser, newFakeCompany]
    res.json(result)
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );

