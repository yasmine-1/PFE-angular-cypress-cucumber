/// <reference types="Cypress" />
/// <reference types="cypress-xpath"/>

const { Given, Then, When, And } = require("cypress-cucumber-preprocessor/steps");
let testsItems;
Given('EXCEL file is read and transformed into JSON file', () => {
  cy.fixture('InternationalizationData.json').then((items) => {
    testsItems = items;
  });
})

When('I access to the website of e-Portal', () => {
  const URL = Cypress.env('URL')
  cy.visit(URL);
  cy.wait(2000)
})

Then('email {string} should be filled in', (email) => {
  cy.xpath('//input[@id="exampleInputEmail1"]').type(email)
  cy.wait(1000)
})
And('password {string} should be filled in', (password) => {
  const boutonXpath = Cypress.env('boutonXpath')
  cy.xpath('//input[@id="exampleInputPassword1"]').type(password)
  cy.xpath(boutonXpath).click({ force: true })
  cy.wait(1000)
})
Then('Footer is displayed', () => {
  cy.xpath('/html[1]/body[1]/app-root[1]/app-home[1]/div[1]/app-footer[1]/div[1]/p[1]').should('have.text', 'Worldline');
  cy.wait(2000)
})
const tests = require('../../fixtures/InternationalizationData.json');
Then('English language should be verified for all labels in home page', () => {
  ['English'].forEach(lang => {
    tests.slice(2).forEach(test => {
      cy.get('mat-select').then(element => {
        if (element.text() !== lang) {
          cy.get('mat-select').click({ force: true }).get('mat-option').contains(lang).click({ force: true });
        }
      });
      if (test.PageName == 'landing') {
        if (test.actions) {
          const closeActions = test.EndActions.split(';');
          test.actions.split(';').forEach((action, index) => {
            // open popup
            cy.xpath(action).click({ force: true });
            cy.wait(1000);
            // check element
            if (test.xPath) {
              cy.xpath(test.xPath).should('have.text', test[lang]);
            }
            else {
              cy.get(test.id).should('have.text', test[lang]);
            }
            // close
            cy.xpath(closeActions[index]).click({ force: true });
            cy.wait(1000);
          });
        }
        else {
          // check element
          if (test.xPath) {
            cy.xpath(test.xPath).should('have.text', test[lang]);
          }
          else {
            cy.get(test.id).should('have.text', test[lang]);
          }
        }
      }
    });
  });
})
Then('Frensh language should be verified for all labels in home page', () => {
  ['Français'].forEach(lang => {
    tests.slice(2).forEach(test => {
      cy.get('mat-select').then(element => {
        if (element.text() !== lang) {
          cy.get('mat-select').click({ force: true }).get('mat-option').contains(lang).click({ force: true });
        }
      });
      if (test.PageName == 'landing') {
        if (test.actions) {
          const closeActions = test.EndActions.split(';');
          test.actions.split(';').forEach((action, index) => {
            // open popup
            cy.xpath(action).click({ force: true });
            cy.wait(1000);
            // check element
            if (test.xPath) {
              cy.xpath(test.xPath).should('have.text', test[lang]);
            }
            else {
              cy.get(test.id).should('have.text', test[lang]);
            }
            // close
            cy.xpath(closeActions[index]).click({ force: true });
            cy.wait(1000);
          });
        }
        else {
          // check element
          if (test.xPath) {
            cy.xpath(test.xPath).should('have.text', test[lang]);
          }
          else {
            cy.get(test.id).should('have.text', test[lang]);
          }
        }
      }
    });
  });
})
