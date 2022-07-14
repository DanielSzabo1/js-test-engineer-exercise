import RegistrationPage from "../../support/pages/RegistrationPage"
const randomEmail = require('email-generator');
const passwordGenerator = require('generate-password');

describe('Creating an account - password and email address requirements', () => {

  const registrationPage = new RegistrationPage()
  beforeEach(() => {
    cy.visit(Cypress.env('createAnAccountUrl'))
    registrationPage.acceptCookies()
  })

  it('Should reject to continue with a password less than 8 characters', () => {
    const userEmail = randomEmail()
    const userPassword = passwordGenerator.generate({length: 7, numbers: true}) 

    registrationPage.fillOutFormThenContinue(userEmail, userPassword)

    registrationPage.validateRequirement('characterNumber', false)
  })

  it('Should reject to continue with a password without uppercase letter', () => {
    const userEmail = randomEmail.generateEmail()
    const userPassword = passwordGenerator.generate({numbers: true, strict: true}).toLowerCase()

    registrationPage.fillOutFormThenContinue(userEmail, userPassword)

    registrationPage.validatePasswordRequirement('caseSensitivity', false)
  })

  it('Should reject to continue with a password without lowercase letter', () => {
    const userEmail = randomEmail.generateEmail()
    const userPassword = passwordGenerator.generate({numbers: true, strict: true}).toUpperCase()

    registrationPage.fillOutFormThenContinue(userEmail, userPassword)

    registrationPage.validatePasswordRequirement('caseSensitivity', false)
  })

  it('Should reject to continue with a password without number', () => {

  })

  it('Should reject to continue with an email including not allowed characters', () => {

  })
})
