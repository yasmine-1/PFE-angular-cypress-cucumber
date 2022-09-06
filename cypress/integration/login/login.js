import { Given, When } from "cypress-cucumber-preprocessor/steps";
/// <reference types="Cypress" />
/// <reference types="cypress-xpath"/>
let testsLogin;
Given('EXCEL file is read and transformed into JSON file', () => {
  cy.fixture('InternationalizationData.json').then((items) => {
    testsLogin = items;
  });
})
When('I access to the website of e-Portal', () => {
  const URL = Cypress.env('URL')
  cy.visit(URL);
  cy.wait(2000)
})
Then("'Welcome to e-Portal' is displayed", () => {
  cy.xpath('/html[1]/body[1]/app-root[1]/app-login[1]/div[1]/div[1]/div[1]/div[1]/div[1]/h2[1]').should('have.text', 'Welcome to e-Portal');
  cy.wait(2000)
})
const tests = require('../../fixtures/InternationalizationData.json');
Then('Labels should be verified with English language', () => {
  ['English'].forEach(lang => {
    if (cy.get('select') != lang) {
      cy.get('select').select(lang).should('have.value', lang)
    }
    tests.forEach(test => {
      if (test.PageName == 'login') {
        // if (!Object.values(test.xPath).includes(null)) {
        if (!test.xPath.includes('/input')) {
          cy.xpath(test.xPath).should('have.text', test[lang]);
        }
        else {
          cy.xpath(test.xPath).invoke('attr', 'placeholder').should('equal', test[lang])
        }
      }
    });
  })
})

Then('Labels should be verified with Frensh language', () => {
  ['Français'].forEach(lang => {
    if (cy.get('select') != lang) {
      cy.get('select').select(lang).should('have.value', lang)
    }
    tests.forEach(test => {
      if (test.PageName == 'login') {
        if (!Object.values(test.xPath).includes(null)) {
          if (!test.xPath.includes('/input')) {
            cy.xpath(test.xPath).should('have.text', test[lang]);
          }
          else {
            cy.xpath(test.xPath).invoke('attr', 'placeholder').should('equal', test[lang])
          }
        }
        else {
          console.log("row contains null element")
        }
      }
    });
  })
})

