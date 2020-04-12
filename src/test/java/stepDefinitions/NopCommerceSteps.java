package stepDefinitions;

import common.CommonAPI;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageObjectRepository.AddNewCustomerPage;
import pageObjectRepository.NopCommercePageObjectRepository;
import pageObjectRepository.SearchCustomersPage;

import java.util.concurrent.TimeUnit;

public class NopCommerceSteps extends CommonAPI {



    @Given("User launches Chrome browser")
    public void user_launches_Chrome_browser() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Omar Al-Faruque\\Downloads\\chromedriver_win32 (2)\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
    }

    @When("User opens URL {string}")
    public void user_opens_URL(String url) {
        driver.get(url);
    }

    @When("User enters email as {string} and password as {string}")
    public void user_enters_email_as_and_password_as(String email, String password) {
        nopCPORepository = new NopCommercePageObjectRepository(driver);
        nopCPORepository.inputEmailAndPassword(email, password);
    }

    @Then("Click on LOG IN")
    public void click_on_LOG_IN() {
        nopCPORepository.clickOnLoginButton();
    }

    @When("Page Title Should be {string}")
    public void login_Page_Title_Should_be(String title) {
        String loginTitle = driver.getTitle();
        System.out.println(loginTitle);
        Assert.assertEquals(title, loginTitle);
    }

    @Then("Click in Logout")
    public void click_in_Logout() {
        nopCPORepository.clickLogOut();
    }

    @When("Page Title should be {string}")
    public void page_Title_should_be(String title2) {
        String logoutTitle = driver.getTitle();
        System.out.println(logoutTitle);
        Assert.assertEquals(title2, logoutTitle);
    }

    @Then("Close the browser")
    public void close_the_browser() {
        driver.quit();
    }



    //Following Step Definitions are for Customers Features........
    @Then("User landed on Dashboard page")
    public  void user_landed_on_Dashboard_page(){
        addCust = new AddNewCustomerPage(driver);
        Assert.assertEquals("Dashboard / nopCommerce administration", addCust.getPageTitle());
    }

    @When("User click on Customers menu")
    public void user_click_on_Customers_menu() {
        addCust.clickCustomersMenue();
    }

    @When("User click on Customers list")
    public void user_click_on_Customers_list() {
        addCust.clickCustomersList();
    }

    @When("User click on Add new button")
    public void user_click_on_Add_new_button() {
        addCust.clickAddNewButton();
    }

    @Then("User landed on Add a new customer page")
    public void user_landed_on_Add_a_new_customer_page(){
        Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPageTitle());
    }

    @When("User filled up all customer info")
    public void user_filled_up_all_cusotmer_info() throws InterruptedException {
        String email = randomString()+ "@gmail.com";
        addCust.enterEmailId(email);
        addCust.enterPassword("test123");
        addCust.enterFirstName("Mike");
        addCust.enterLastName("Miller");
        addCust.selectGender("Male");
        addCust.enterDateOfBirth("02/15/1972");//Date format:mm/dd/yyyy
        addCust.enterCompanyName("DataLink Inc");
        addCust.selectIsTaxExampt();
        addCust.selectNewsLetterYourStoreName();
        addCust.selectNewsLetterTestStore();
        //addCust.selectCustomerRole("Vendor");
        addCust.setSelectVendor();
        addCust.selectActiveButton();
        addCust.writeAnAdminComment("The customer is requested to register");
    }

    @Then("User click on Save Button")
    public void user_click_on_Save_Button() {
        addCust.clickOnSaveButton();
    }

    @Then("User will see the message {string}")
    public void user_will_see_the_message(String confMsg) {
        Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully"));
    }


    //Search Customer's method starts here
    @When("User filled up email field")
    public void user_filled_up_email_field() {
        searchCust = new SearchCustomersPage(driver);
        searchCust.inputSearchEmailField("victoria_victoria@nopCommerce.com");

    }
    @When("User click on search button")
    public void user_click_on_search_button() {
        searchCust.clickOnSearchButton();
    }
    @Then("User landed on Customers page")
    public void user_landed_on_Customers_page() {
        Assert.assertEquals("Customers / nopCommerce administration", addCust.getPageTitle());

    }
    @Then("User can see respective customer's email ID")
    public void user_can_see_respective_customer_s_email_ID() {
        searchCust.checkSearchedEmail("victoria_victoria@nopCommerce.com");
    }
}
