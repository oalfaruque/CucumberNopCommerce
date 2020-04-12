Feature: OrangeHRM Home Page
  Scenario: Logo presence in OrangeHRM home page

    Given I launch the Chrome browser
    When I open OrangeHRM home page
    Then I verify if the Logo present in the home page
    And I close the Browser
