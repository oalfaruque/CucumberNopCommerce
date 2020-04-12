package pageObjectRepository;

import common.CommonAPI;
import org.checkerframework.checker.units.qual.C;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchCustomersPage extends CommonAPI {

    public SearchCustomersPage(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "SearchEmail")
    @CacheLookup
    WebElement searchEmailField;

    @FindBy(id = "SearchFirstName")
    @CacheLookup
    WebElement searchFNameField;

    @FindBy(id = "SearchLastName")
    @CacheLookup
    WebElement searchLNameField;

    @FindBy(id = "search-customers")
    @CacheLookup
    WebElement searchButton;

    @FindBy(xpath = "//td[contains(text(),'victoria_victoria@nopCommerce.com')]")
    @CacheLookup
    WebElement searchedEmail;

    public void inputSearchEmailField(String email){
        searchEmailField.clear();
        searchEmailField.sendKeys(email);
    }
    public void inputSearchFirstNameField(String firstName){
        searchFNameField.clear();
        searchFNameField.sendKeys(firstName);
    }
    public void inputSearchLastNameField(String lastName){
        searchLNameField.clear();
        searchLNameField.sendKeys(lastName);
    }
    public void clickOnSearchButton(){
        searchButton.click();
    }
    public boolean checkSearchedEmail(String email) {
        boolean flag = true;
        System.out.println(searchedEmail.getText().contains(email));
        if(!flag) {
            System.out.println("The customer is registered");
        } else
            System.out.println("There has no any customer with this emailID");
        return flag;
    }

}
