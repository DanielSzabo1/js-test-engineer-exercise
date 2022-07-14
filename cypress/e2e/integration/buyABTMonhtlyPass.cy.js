import RegistrationPage from "../../support/pages/RegistrationPage"

describe('Creating an account - password and email address requirements', () => {

  const registrationPage = new RegistrationPage()
  beforeEach(() => {
    cy.visit(Cypress.env('createAnAccountUrl'))
    registrationPage.acceptCookies()
  })

  it('Should reject to continue with a password less than 8 characters', () => {
  })

  it('Should reject to continue with a password without uppercase letter', () => {
  })

  it('Should reject to continue with a password without lowercase letter', () => {
  })

  it('Should reject to continue with a password without number', () => {
  })

  it('Should reject to continue with an email including not allowed characters', () => {
  })
})
