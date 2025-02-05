describe('Menu validation', function () {
  beforeEach(function () {
    cy.visit('https://phptravels.com/demo/')
    cy.fixture('menuData').as('menuData')
  })

  it('Validate product functionality', function () {
    cy.contains('.nav-link > span', 'Product').click()

    const expectedNames = this.menuData.productMenu

    cy.get('ul > li > ul > li > a').each((item, index) => {
      if (index < 5) {
        const expectedName = expectedNames[index]
        cy.wrap(item).focus('contains.text', expectedName)
      }
    })
  })

  it('Validate features functionality', function () {
    cy.contains('.nav-link > span', 'Features').click()

    const expectedNames = this.menuData.featuresMenu

    cy.get(
      'li > ul[class="dropdown-menu p-2 rounded-4 shadow-sm border-light show"] > li > a',
    ).each((item, index) => {
      if (index < 8) {
        const expectedName = expectedNames[index]
        cy.wrap(item).focus('contains.text', expectedName)
      }
    })
  })

  it('Validate company functionality', function () {
    cy.contains('.nav-link > span', 'Company').click()

    const expectedNames = this.menuData.companyMenu

    cy.get(
      'li > ul[class="dropdown-menu p-2 rounded-4 shadow-sm border-light show"] > li > a',
    ).each((item, index) => {
      if (index < 9) {
        const expectedName = expectedNames[index]
        cy.wrap(item).focus('contains.text', expectedName)
      }
    })
  })
})
