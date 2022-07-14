require('cypress-iframe');

class RegistrationPage {

  cookiePolicyPopUp = {
    acceptCookie: 'div a.call'
  }
  createAnAccount = {
  emailAddressField: '#email',
  passwordField: '#password',
  emailFeedback: '#email-feedback',
  showPasswordToggle: '[data-testid="password-toggle]',
  continueButton: '[data-testid="account-form-submit"]'
  }

  yourDetails = {
    firstNameField: '#firstName', 
    lastNameField: '#lastName', 
    securityDetails: {
      dateOfBirth: '24/10/1995',
      MothersMaidenName: 'Susan'
    },
    continueButton: '[data-testid="personal-details-form-submit"]'
  }

  acceptCookies() {
    cy.frameLoaded('.truste_popframe')
    cy.iframe().find(this.cookiePolicyPopUp.acceptCookie).should('be.visible').click() 
  }

  passwordRequirements(indexOfReq) {
    return `[data-testid="password-requirements"] ul li:nth-child(${indexOfReq+1})`
  }

  fillEmail(userEmail) {
    cy.get(this.createAnAccount.emailAddressField).type(userEmail)
  }

  fillPassword(userPassword) {
    cy.get(this.createAnAccount.passwordField).type(userPassword)
  }

  clickContinue() {
    cy.get(this.createAnAccount.continueButton).click()
  }

  fillOutFormThenContinue(email, password) {
    this.fillEmail(email)
    this.fillPassword(password)
    this.clickContinue()
  }

  validatePasswordRequirement(nameOfRequirement, reqIsValid) {
    const requirements = ['characterNumber', 'caseSensitivity', 'includesNumber']
    const indexOfReq = requirements.indexOf(nameOfRequirement)

    cy.get(this.passwordRequirements(indexOfReq)).invoke('attr', 'data-valid').should('eq', reqIsValid.toString())
  }

  validateEmailAddress() {
    cy.get(this.createAnAccount.emailFeedback).should('be.visible').should('have.text', 'Enter an email address in the correct format, like name@example.com')
  }
}

export default RegistrationPage