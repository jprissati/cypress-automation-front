import { faker } from '@faker-js/faker'

Cypress.Commands.add('generateRandomName', function () {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  return { firstName: firstName, lastName: lastName }
})

Cypress.Commands.add('generateRandomPhoneNumber', function () {
  const ddd = faker.number.bigInt({ min: 100, max: 100 })
  const number = faker.number.bigInt(1000000000)
  const numberString = number.toString()

  const phoneNumber = ddd + '9' + numberString
  return { phoneNumber: phoneNumber }
})

Cypress.Commands.add('generateRandomBusinessName', function () {
  const businessName = faker.company.name()
  return { businessName: businessName }
})

Cypress.Commands.add(
  'fillRegistrationForm',
  function (firstName, lastName, phoneNumber, businessName, randomEmail) {
    if (firstName) {
      cy.get('.first_name.form-control').type(firstName)
    }

    if (lastName) {
      cy.get('.last_name.form-control').type(lastName)
    }

    if (phoneNumber) {
      cy.get('.whatsapp_number.form-control').type(phoneNumber)
    }

    if (businessName) {
      cy.get('.company_name.form-control').type(businessName)
    }

    if (randomEmail) {
      cy.get('.email.form-control').type(randomEmail)
    }
  },
)
