Feature: Customers
    Background:
      Given User launches Chrome browser
      When User opens URL "https://admin-demo.nopcommerce.com/login"
      And User enters email as "admin@yourstore.com" and password as "admin"
      Then Click on LOG IN
      Then User landed on Dashboard page

  @sanity
    Scenario: Adding a Customer in NopCommerce
      When User click on Customers menu
      And User click on Customers list
      And User click on Add new button
      Then User landed on Add a new customer page
      When User filled up all customer info
      Then User click on Save Button
      Then User will see the message "The new customer has been added successfully"
      And Close the browser

  @regression
  Scenario:  Search Customer with EmailID
    When User click on Customers menu
    And User click on Customers list
    When User filled up email field
    And User click on search button
    Then User landed on Customers page
    And User can see respective customer's email ID
    Then Close the browser

    