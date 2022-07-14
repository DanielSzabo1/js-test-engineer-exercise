import date from 'date-and-time';
const passwordGenerator = require('generate-password');
const randomEmailGenerator = require('email-generator');

function randomDate(start, end) {
  return date.format(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())), 'YYYY/MM/DD HH:mm:ss'); 
}

function generateRandomPassword(hasNumber, hasUpperCase, hasLowerCase, length = 10) {
 return passwordGenerator.generate({length: length, numbers: hasNumber, uppercase: hasUpperCase, lowercase: hasLowerCase, strict: true})
}

function generateRandomEmail(additionalCharacters = '') {
  return randomEmailGenerator.generateEmail().replaceAll('"','') + additionalCharacters
}

export { randomDate, generateRandomPassword, generateRandomEmail }