Feature: nopcommerce admin test page

  @sanity
  Scenario: Login into nopcommerce
    Given User launches Chrome browser
    When User opens URL "https://admin-demo.nopcommerce.com/login"
    And User enters email as "admin@yourstore.com" and password as "admin"
    Then Click on LOG IN
    When Page Title Should be "Dashboard / nopCommerce administration"
    Then Click in Logout
    When Page Title should be "Your store. Login"
    Then Close the browser

  Scenario Outline: Login into nopcommerce Data Driven
    Given User launches Chrome browser
    When User opens URL "https://admin-demo.nopcommerce.com/login"
    And User enters email as "<Email>" and password as "<Password>"
    Then Click on LOG IN
    When Page Title Should be "Dashboard / nopCommerce administration"
    Then Click in Logout
    When Page Title should be "Your store. Login"
    Then Close the browser

    Examples:
      |Email                      |Password|
      |admin@yourstore.com        |admin   |
      |oalfaruque@gmail.com       |15021972|
      |mikemiller@gmail.com       |01012010|

