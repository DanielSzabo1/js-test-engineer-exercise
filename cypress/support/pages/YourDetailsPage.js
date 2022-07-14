const RegistrationPage = require("./RegistrationPage");

class YourDetailsPage extends RegistrationPage {

  yourDetails = {
    firstNameField: '#firstName', 
    lastNameField: '#lastName',
    securityDetails: {
      dateOfBirth: {
        day: '#dobDay',
        month: '#dobMonth',
        year: '#dobYear'
      },
      MothersMaidenName: '#security'
    },
    continueButton: '[data-testid="personal-details-form-submit"]'
  }

  fillPersonalDetailsForm(fullName, dateOfBirth, MothersMaidenName) {
    const firstName = fullName.split(' ')[0]
    const lastName = fullName.split(' ')[1]

    cy.log('Filling out first and last name: ' + fullName)
    cy.get(this.yourDetails.firstNameField).clear().type(firstName)
    cy.get(this.yourDetails.lastNameField).clear().type(lastName)


    cy.log('Filling out date fo birth: ' + dateOfBirth)
    this.fillDateOfBirth(dateOfBirth)

    cy.log('Filling out mothers maiden name: ' + MothersMaidenName)
    cy.get(this.yourDetails.securityDetails.MothersMaidenName).clear().type(MothersMaidenName)
  }

  fillDateOfBirth(dateOfBirth) {
    const birthDateElements = dateOfBirth.toString().split(' ')[0].split('/') 

    const day = birthDateElements[2]
    const month = birthDateElements[1]
    const year = birthDateElements[0]

    cy.get(this.yourDetails.securityDetails.dateOfBirth.day).clear().type(day)
    cy.get(this.yourDetails.securityDetails.dateOfBirth.month).clear().type(month)
    cy.get(this.yourDetails.securityDetails.dateOfBirth.year).clear().type(year)
  }

}

export default YourDetailsPage