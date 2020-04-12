package stepDefinitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class OrangeHRMSteps {

    WebDriver driver;

    @Given("I launch the Chrome browser")
    public void i_launch_the_Chrome_browser() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Omar Al-Faruque\\Downloads\\chromedriver_win32 (2)\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
    }
    @When("I open OrangeHRM home page")
    public void i_open_OrangeHRM_home_page() {
        driver.get("https://www.orangehrm.com/");
    }
    @Then("I verify if the Logo present in the home page")
    public void i_verify_if_the_Logo_present_in_the_home_page() {
        boolean status = driver.findElement(By.xpath("//img[@class='nav-logo']")).isDisplayed();
        Assert.assertEquals(true, status);
       }
    @Then("I close the Browser")
    public void i_close_the_Browser() {
        driver.close();
    }
}
