package pageObjectRepository;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NopCommercePageObjectRepository {

    public NopCommercePageObjectRepository(WebDriver driver){
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "Email")
    @CacheLookup
    WebElement inputEmail;

    @FindBy(id = "Password")
    @CacheLookup
    WebElement inputPassword;

    @FindBy(xpath = "//input[@class='button-1 login-button']")
    @CacheLookup
    WebElement loginButton;

    @FindBy(xpath = "//a[contains(text(),'Logout')]")
    @CacheLookup
    WebElement logOutButton;

    public void inputEmailAndPassword(String email, String password){
        inputEmail.clear();
        inputEmail.sendKeys(email);
        inputPassword.clear();
        inputPassword.sendKeys(password);
    }
    public void clickOnLoginButton(){
        loginButton.click();
    }
    public void clickLogOut(){
       logOutButton.click();
    }

  }
