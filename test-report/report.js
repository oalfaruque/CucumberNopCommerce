$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/CustomersNopCommerce.feature");
formatter.feature({
  "name": "Customers",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_enters_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on LOG IN",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_on_LOG_IN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User landed on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_landed_on_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding a Customer in NopCommerce",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User click on Customers menu",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_click_on_Customers_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Customers list",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_click_on_Customers_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Add new button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_click_on_Add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User landed on Add a new customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_landed_on_Add_a_new_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filled up all customer info",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_filled_up_all_cusotmer_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Save Button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_click_on_Save_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see the message \"The new customer has been added successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_will_see_the_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_enters_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on LOG IN",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_on_LOG_IN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User landed on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_landed_on_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Customer with EmailID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "User click on Customers menu",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_click_on_Customers_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Customers list",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_click_on_Customers_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User filled up email field",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_filled_up_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User landed on Customers page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_landed_on_Customers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see respective customer\u0027s email ID",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_can_see_respective_customer_s_email_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/NopCommerce.feature");
formatter.feature({
  "name": "nopcommerce admin test page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login into nopcommerce",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_enters_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on LOG IN",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_on_LOG_IN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title Should be \"Dashboard / nopCommerce administration\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.login_Page_Title_Should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click in Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_in_Logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login into nopcommerce Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters email as \"\u003cEmail\u003e\" and password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on LOG IN",
  "keyword": "Then "
});
formatter.step({
  "name": "Page Title Should be \"Dashboard / nopCommerce administration\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click in Logout",
  "keyword": "Then "
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "When "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "oalfaruque@gmail.com",
        "15021972"
      ]
    },
    {
      "cells": [
        "mikemiller@gmail.com",
        "01012010"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login into nopcommerce Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_enters_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on LOG IN",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_on_LOG_IN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title Should be \"Dashboard / nopCommerce administration\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.login_Page_Title_Should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click in Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_in_Logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login into nopcommerce Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"oalfaruque@gmail.com\" and password as \"15021972\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_enters_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on LOG IN",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_on_LOG_IN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title Should be \"Dashboard / nopCommerce administration\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.login_Page_Title_Should_be(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard / nopCommerce administratio]n\u003e but was:\u003c[Your store. Logi]n\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.NopCommerceSteps.login_Page_Title_Should_be(NopCommerceSteps.java:49)\r\n\tat ✽.Page Title Should be \"Dashboard / nopCommerce administration\"(file:///C:/Users/Omar%20Al-Faruque/IdeaProjects/CucumberSeleniumPracticeSDET/./Features/NopCommerce.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click in Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_in_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login into nopcommerce Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_launches_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters email as \"mikemiller@gmail.com\" and password as \"01012010\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.user_enters_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on LOG IN",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_on_LOG_IN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title Should be \"Dashboard / nopCommerce administration\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.login_Page_Title_Should_be(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard / nopCommerce administratio]n\u003e but was:\u003c[Your store. Logi]n\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepDefinitions.NopCommerceSteps.login_Page_Title_Should_be(NopCommerceSteps.java:49)\r\n\tat ✽.Page Title Should be \"Dashboard / nopCommerce administration\"(file:///C:/Users/Omar%20Al-Faruque/IdeaProjects/CucumberSeleniumPracticeSDET/./Features/NopCommerce.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click in Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.click_in_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.NopCommerceSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:Features/OrangeHRM.feature");
formatter.feature({
  "name": "OrangeHRM Home Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Logo presence in OrangeHRM home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I launch the Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.OrangeHRMSteps.i_launch_the_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open OrangeHRM home page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.OrangeHRMSteps.i_open_OrangeHRM_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify if the Logo present in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.OrangeHRMSteps.i_verify_if_the_Logo_present_in_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.OrangeHRMSteps.i_close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
});