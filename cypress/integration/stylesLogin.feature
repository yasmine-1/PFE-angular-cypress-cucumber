Feature: testing CSS styles of login page

  Background: Opening login page
    Given EXCEL file is read and transformed into JSON file
    When I access to the website of e-Portal
  Scenario: Making sure that I am on login page
    Then 'Welcome to e-Portal' is displayed
  Scenario: Verifying color of all elements in login page
    Then Color should be verified for all elements in login page
  Scenario: Verifying width of all elements in login page
    Then Width should be verified for all elements in login page
  Scenario: Verifying height of all elements in login page
    Then Height should be verified for all elements in login page