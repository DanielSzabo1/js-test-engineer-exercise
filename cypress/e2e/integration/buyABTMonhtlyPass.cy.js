import RegistrationPage from "../../support/pages/RegistrationPage"
import YourDetailsPage from "../../support/pages/YourDetailsPage"
const randomNameGenerator = require('random-fullName');
import { randomDate, generateRandomPassword, generateRandomEmail} from '../../support/utils'

describe('Creating an account - password and email address requirements', () => {
  const registrationPage = new RegistrationPage()

  beforeEach(() => {
    cy.visit(Cypress.env('createAnAccountUrl'))
    registrationPage.setCookies()
    // registrationPage.acceptCookies()
    registrationPage.waitForHeader('Create an account')
  })

  it('Should reject to continue with a password less than 8 characters', () => {
    const userEmail = generateRandomEmail()
    const userPassword = generateRandomPassword(/*hasNumber*/ true, /*hasUpperCase*/ true, /*hasLowerCase*/ true, /*length*/ 7)

    registrationPage.fillOutFormThenContinue(userEmail, userPassword)

    registrationPage.validatePasswordRequirement('characterNumber', false)
  })

  it('Should reject to continue with a password without uppercase letter', () => {
    const userEmail = generateRandomEmail()
    const userPassword = generateRandomPassword(/*hasNumber*/ true, /*hasUpperCase*/ true, /*hasLowerCase*/ false)

    registrationPage.fillOutFormThenContinue(userEmail, userPassword)

    registrationPage.validatePasswordRequirement('caseSensitivity', false)
  })

  it('Should reject to continue with a password without lowercase letter', () => {
    const userEmail = generateRandomEmail()
    const userPassword = generateRandomPassword(/*hasNumber*/ true, /*hasUpperCase*/ false, /*hasLowerCase*/ true)

    registrationPage.fillOutFormThenContinue(userEmail, userPassword)

    registrationPage.validatePasswordRequirement('caseSensitivity', false)
  })

  it('Should reject to continue with a password without number', () => {
    const userEmail = generateRandomEmail()
    const userPassword = generateRandomPassword(/*hasNumber*/ false, /*hasUpperCase*/ true, /*hasLowerCase*/ true)

    registrationPage.fillOutFormThenContinue(userEmail, userPassword)

    registrationPage.validatePasswordRequirement('includesNumber', false)
  })

  it('Should reject to continue with an email including not allowed characters', () => {
    const userEmail = generateRandomEmail('á')
    const userPassword = generateRandomPassword(/*hasNumber*/ true, /*hasUpperCase*/ true, /*hasLowerCase*/ true)

    registrationPage.fillOutFormThenContinue(userEmail, userPassword, 'Create an account')

    registrationPage.validateEmailAddress()
  })
})

describe('Creating an account - filling out the form then continue', () => {
  const registrationPage = new RegistrationPage()
  const yourDetailsPage = new YourDetailsPage()

  before(() => {
    cy.visit(Cypress.env('createAnAccountUrl'))
    registrationPage.setCookies()
    // registrationPage.acceptCookies()
  })

  it('I should be able to continue after I fill out the form', () => {
    const userEmail = generateRandomEmail()
    const userPassword = generateRandomPassword(/*hasNumber*/ true, /*hasUpperCase*/ true, /*hasLowerCase*/ true)
    const randomName = randomNameGenerator({gender: 'male'})
    const MothersMaidenName = randomNameGenerator({gender: 'female'})
    const dateOfBirth = randomDate(new Date(1980, 0, 1), new Date(2000, 0, 1))

    registrationPage.fillOutFormThenContinue(userEmail, userPassword)

    registrationPage.waitForHeader('Your details')

    yourDetailsPage.fillPersonalDetailsForm(randomName, dateOfBirth, MothersMaidenName)

    yourDetailsPage.clickContinue('Your details')

    yourDetailsPage.waitForHeader('Billing address')
  })
})
