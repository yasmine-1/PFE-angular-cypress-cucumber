Feature: testing CSS styles of home page
  Background: Authentification
    Given EXCEL file is read and transformed into JSON file
    When I access to the website of e-Portal
    Then email "yasmine.walha@enis.tn" should be filled in 
    And password "123123" should be filled in
  Scenario: Making sure that I am on landing page
    Then Footer is displayed
  Scenario: Verifying color of all elements in home page
    Then Color should be verified for all elements in home page
  Scenario: Verifying width of all elements in home page
    Then Width should be verified for all elements in home page
  Scenario: Verifying height of all elements in home page
    Then Height should be verified for all elements in home page
  
    

