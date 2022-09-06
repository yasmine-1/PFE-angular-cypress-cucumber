/// <reference types="Cypress" />
/// <reference types="cypress-xpath"/>
const { Given, Then, When } = require("cypress-cucumber-preprocessor/steps");
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
Then('email {string} should be filled in', (email) => {
  cy.xpath('//input[@id="exampleInputEmail1"]').type(email)
  cy.wait(1000)
})
And('password {string} should be filled in', (password) => {
  const boutonXpath = Cypress.env('boutonXpath')
  cy.xpath('//input[@id="exampleInputPassword1"]').type(password)
  cy.xpath(boutonXpath).click({ force: true })
  cy.wait(2000)
})
Then('Footer is displayed', () => {
  cy.xpath('/html[1]/body[1]/app-root[1]/app-home[1]/div[1]/app-footer[1]/div[1]/p[1]').should('have.text', 'Worldline');
  cy.wait(2000)
})
const tests = require('../../fixtures/DataStylesCSS.json');
Then('Color should be verified for all elements in home page', () => {
  ['Color'].forEach(style => {
    tests.slice(2).forEach(test => {
      if (test.PageName == 'landing') {
        if (test.actions) {
          const closeActions = test.EndActions.split(';');
          test.actions.split(';').forEach((action, index) => {
            // open popup
            cy.xpath(action).click({ force: true });
            cy.wait(1000);
            // check CSS styles
            cy.xpath(test.xPath).should('have.css', 'background-color').and('eq', test[style])
            // close
            cy.xpath(closeActions[index]).click({ force: true });
            cy.wait(1000);
          });
        }
        else {
          // check CSS styles
          cy.xpath(test.xPath).should('have.css', 'background-color').and('eq', test[style])
        }
      }
    });
  });
})

Then('Width should be verified for all elements in home page', () => {
  ['Width'].forEach(style => {
    tests.slice(2).forEach(test => {
      if (test.PageName == 'landing') {
        if (test.actions) {
          const closeActions = test.EndActions.split(';');
          test.actions.split(';').forEach((action, index) => {
            // open popup
            cy.xpath(action).click({ force: true });
            cy.wait(1000);
            // check CSS styles
            cy.xpath(test.xPath).should('have.css', 'width').and('eq', test[style])
            // close
            cy.xpath(closeActions[index]).click({ force: true });
            cy.wait(1000);
          });
        }
        else {
          // check CSS styles
          cy.xpath(test.xPath).should('have.css', 'width').and('eq', test[style])
        }
      }
    });
  });
})

Then('Height should be verified for all elements in home page', () => {
  ['Height'].forEach(style => {
    tests.slice(2).forEach(test => {
      if (test.PageName == 'landing') {
        if (test.actions) {
          const closeActions = test.EndActions.split(';');
          test.actions.split(';').forEach((action, index) => {
            // open popup
            cy.xpath(action).click({ force: true });
            cy.wait(1000);
            // check CSS styles
            cy.xpath(test.xPath).should('have.css', 'height').and('eq', test[style])
            // close
            cy.xpath(closeActions[index]).click({ force: true });
            cy.wait(1000);
          });
        }
        else {
          // check CSS styles
          cy.xpath(test.xPath).should('have.css', 'height').and('eq', test[style])
        }
      }
    });
  });
})
