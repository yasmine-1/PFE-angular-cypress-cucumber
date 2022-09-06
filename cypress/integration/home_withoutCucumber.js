/// <reference types="Cypress" />
/// <reference types="cypress-xpath"/>

//checking internationalisation of home page with only Cypress (without Cucumber)
describe('Checking internationalization for home page', () => {
    before(() => {
        cy.visit("http://localhost:4200");
        // S’exécute avant chaque test
    })

    it("I enter my email and password", () => {
        // importing information such as mail, password and button's xpath from cypress.json
        const mail1 = Cypress.env('mail1')
        const password1 = Cypress.env('password1')
        const boutonXpath = Cypress.env('boutonXpath')
        cy.xpath('//input[@id="exampleInputEmail1"]').type(mail1)
        cy.wait(1000)
        cy.xpath('//input[@id="exampleInputPassword1"]').type(password1)
        // click on login button
        cy.xpath(boutonXpath).click({ force: true })
        cy.wait(1000)
    });

    const tests = require('../fixtures/InternationalizationData.json');
    ['English', 'Français'].forEach(lang => {
        tests.slice(2).forEach(test => {
            it(`check element by xpath for language ${lang} and ${test.Information}`, () => {
                cy.get('mat-select').then(element => {
                    if (element.text() !== lang) {
                        cy.get('mat-select').click({ force: true }).get('mat-option').contains(lang).click({ force: true });
                    }
                });
                if (test.PageName == 'landing') {
                    // if the element is inside the popup than it contains action in excel file
                    if (test.actions) {
                        //splitting list of closeActions because it may have more than one element 
                        //(in case if we must click on close actions successively)
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
                            // close popup
                            cy.xpath(closeActions[index]).click({ force: true, multiple: true });
                            cy.wait(1000);
                            console.log("close ", test.Information, test.xpath);
                        });
                    }
                    else {
                        // check elements which are outside of the popup
                        if (test.xPath) {
                            cy.xpath(test.xPath).should('have.text', test[lang]);
                        } else {
                            cy.get(test.id).should('have.text', test[lang]);
                        }
                    }
                }
            });
        });
    })
})