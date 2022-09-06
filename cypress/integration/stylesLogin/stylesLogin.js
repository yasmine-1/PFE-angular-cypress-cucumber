/// <reference types="Cypress" />
/// <reference types="cypress-xpath"/> 
let testsLogin;
Given('EXCEL file is read and transformed into JSON file', () => {
  cy.fixture('DataStylesCSS.json').then((items) => {
    testsLogin = items;
  });
})
When('I access to the website of e-Portal', () => {
  const URL = Cypress.env('URL')
  cy.visit(URL);
  cy.wait(2000)
});
Then("'Welcome to e-Portal' is displayed", () => {
  cy.xpath('/html[1]/body[1]/app-root[1]/app-login[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h2[1]').should('have.text', 'Welcome to e-Portal');
  cy.wait(2000)
})
const tests = require('../../fixtures/DataStylesCSS.json');
Then('Color should be verified for all elements in login page', () => {
  ['Color'].forEach(property => {
    tests.forEach(test => {
      if (test.PageName == 'login') {
        if (!Object.values(test.xPath).includes(null)) {
          cy.xpath(test.xPath).should('have.css', 'background-color').and('eq', test[property])
        }
        else {
          console.log("row contains null xPath")
        }
      }
    });
  });
})

Then('Width should be verified for all elements in login page', () => {
  ['Width'].forEach(property => {
    tests.forEach(test => {
      if (test.PageName == 'login') {
        if (!Object.values(test.xPath).includes(null)) {
          cy.xpath(test.xPath).should('have.css', 'width').and('eq', test[property])
        }
        else {
          console.log("row contains null xPath")
        }
      }
    });
  });
})

Then('Height should be verified for all elements in login page', () => {
  ['Height'].forEach(property => {
    tests.forEach(test => {
      if (test.PageName == 'login') {
        if (!Object.values(test.xPath).includes(null)) {
          cy.xpath(test.xPath).should('have.css', 'height').and('eq', test[property])
        }
        else {
          console.log("row contains null xPath")
        }
      }
    });
  });
})
