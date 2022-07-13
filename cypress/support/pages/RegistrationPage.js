require('cypress-iframe');

class RegistrationPage {

  cookiePolicyPopUp = {
    acceptCookie: 'div a.call'
  }
  createAnAccount = {
  emailAddressField: '#email',
  passwordField: '#password',
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
    cy.iframe().find(this.cookiePolicyPopUp.acceptCookie).click() 
  }

  passwordRequirements(indexOfReq) {
    return `#password-requirements ul li:nth-child(${indexOfReq})`
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
}

export default RegistrationPage