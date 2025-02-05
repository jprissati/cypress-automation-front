describe('Registration scenarios', function () {
  it('Attempt to register without first name', function () {
    cy.visit('https://phptravels.com/demo/')

    cy.generateRandomName().then(({ firstName, lastName }) => {
      const randomEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`

      cy.generateRandomPhoneNumber().then(({ phoneNumber }) => {
        cy.generateRandomBusinessName().then(({ businessName }) => {
          cy.fillRegistrationForm(
            null,
            lastName,
            phoneNumber,
            businessName,
            randomEmail,
          )
        })
      })

      cy.get('#numb1')
        .invoke('text')
        .then((num1) => {
          cy.get('#numb2')
            .invoke('text')
            .then((num2) => {
              const soma = Number(num1) + Number(num2)
              cy.get('input[placeholder="Result ?"]').type(soma)
              cy.get('.btn_submit.btn').click()
            })
        })

      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Please type your first name')
      })
    })
  })

  it('Attempt to register without last name', function () {
    cy.visit('https://phptravels.com/demo/')

    cy.generateRandomName().then(({ firstName, lastName }) => {
      const randomEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`

      cy.generateRandomPhoneNumber().then(({ phoneNumber }) => {
        cy.generateRandomBusinessName().then(({ businessName }) => {
          cy.fillRegistrationForm(
            firstName,
            null,
            phoneNumber,
            businessName,
            randomEmail,
          )
        })

        cy.get('#numb1')
          .invoke('text')
          .then((num1) => {
            cy.get('#numb2')
              .invoke('text')
              .then((num2) => {
                const soma = Number(num1) + Number(num2)
                cy.get('input[placeholder="Result ?"]').type(soma)
                cy.get('.btn_submit.btn').click()
              })
          })

        cy.on('window:alert', (alertText) => {
          expect(alertText).to.contains('Please type your last name')
        })
      })
    })
  })

  it('Attempt to register without phone number', function () {
    cy.visit('https://phptravels.com/demo/')

    cy.generateRandomName().then(({ firstName, lastName }) => {
      const randomEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`

      cy.generateRandomBusinessName().then(({ businessName }) => {
        cy.fillRegistrationForm(
          firstName,
          lastName,
          null,
          businessName,
          randomEmail,
        )

        cy.get('#numb1')
          .invoke('text')
          .then((num1) => {
            cy.get('#numb2')
              .invoke('text')
              .then((num2) => {
                const soma = Number(num1) + Number(num2)
                cy.get('input[placeholder="Result ?"]').type(soma)
                cy.get('.btn_submit.btn').click()
              })
          })

        cy.on('window:alert', (alertText) => {
          expect(alertText).to.contains('Please type your whatsapp number')
        })
      })
    })
  })

  it('Attempt to register without email', function () {
    cy.visit('https://phptravels.com/demo/')

    cy.generateRandomName().then(({ firstName, lastName }) => {
      const randomEmail = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`

      cy.generateRandomPhoneNumber().then(({ phoneNumber }) => {
        cy.fillRegistrationForm(
          firstName,
          lastName,
          phoneNumber,
          null,
          randomEmail,
        )
      })

      cy.get('#numb1')
        .invoke('text')
        .then((num1) => {
          cy.get('#numb2')
            .invoke('text')
            .then((num2) => {
              const soma = Number(num1) + Number(num2)
              cy.get('input[placeholder="Result ?"]').type(soma)
              cy.get('.btn_submit.btn').click()
            })
        })

      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Please type your business name')
      })
    })
  })
})
