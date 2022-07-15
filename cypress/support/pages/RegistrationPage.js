import { cookiesToAccept } from '../utils';

require('cypress-iframe');
const cookie = require('cookie')
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

  waitForHeader(titleOfPage) {
    cy.get('h1').should('be.visible').should('have.text', titleOfPage)
  }

  setCookies() {
    const cookies = cookie.parse(cookiesToAccept)
    
    for(let cookie in cookies) {
      cy.setCookie(cookie, cookies[cookie])
    }
    
    cy.reload()
  }

  acceptCookies() {
    cy.log('Accepting cookies')
    cy.frameLoaded('.truste_popframe')
    cy.iframe().find(this.cookiePolicyPopUp.acceptCookie).should('be.visible').click() 
  }

  passwordRequirements(indexOfReq) {
    return `[data-testid="password-requirements"] ul li:nth-child(${indexOfReq+1})`
  }

  fillEmail(userEmail) {
    cy.log('Fill email field with: ' + userEmail)
    cy.get(this.createAnAccount.emailAddressField).clear().type(userEmail)
  }

  fillPassword(userPassword) {
    cy.log('Fill password field with: ' + userPassword)
    cy.get(this.createAnAccount.passwordField).clear().type(userPassword)
  }

  clickContinue(titleOfPage) {
    const continueButtonSelector = (titleOfPage === 'Your details') ? this.yourDetails.continueButton : this.createAnAccount.continueButton
    cy.get(continueButtonSelector).click()
  }

  fillOutFormThenContinue(email, password, titleOfPage = 'Create an account') {
    this.fillEmail(email)
    this.fillPassword(password)
    this.clickContinue(titleOfPage)
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