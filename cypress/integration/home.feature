Feature: test internationalization labels of home page

  Background: Authentification
    Given EXCEL file is read and transformed into JSON file
    When I access to the website of e-Portal
    Then email "yasmine.walha@enis.tn" should be filled in
    And password "123123" should be filled in
  Scenario: Making sure that I am on landing page
    Then Footer is displayed
  Scenario: Verifying English language for labels in home page
    Then English language should be verified for all labels in home page
  Scenario: Verifying Frensh language for labels in home page
    Then Frensh language should be verified for all labels in home page

