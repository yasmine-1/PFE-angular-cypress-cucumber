Feature: testing internationalization labels of login page
  Background: Opening login page
    Given EXCEL file is read and transformed into JSON file
    When I access to the website of e-Portal
  Scenario: Making sure that I am on login page
    Then 'Welcome to e-Portal' is displayed
  Scenario: Testing labels with English language in login page
    Then Labels should be verified with English language
  Scenario: Testing labels with Frensh language in login page
    Then Labels should be verified with Frensh language