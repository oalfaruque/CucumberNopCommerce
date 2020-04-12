package pageObjectRepository;

import common.CommonAPI;
import io.cucumber.messages.internal.com.google.gson.internal.bind.util.ISO8601Utils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AddNewCustomerPage extends CommonAPI{


    public AddNewCustomerPage(WebDriver driver){
        PageFactory.initElements(driver, this);
    }
    //WebElement Repository
    @FindBy(xpath ="//a[@href= '#']//span[contains(text(), 'Customers')]")
    @CacheLookup
    WebElement customersMenu;

    @FindBy(xpath ="//li[@class='active current-active-item']//span[@class='menu-item-title'][contains(text(),'Customers')]")
    @CacheLookup
    WebElement customersList;

    @FindBy(xpath = "//a[@class='btn bg-blue']")
    @CacheLookup
    WebElement addNewButton;

    @FindBy(xpath = "//input[@id='Email']")
    @CacheLookup
    WebElement emailField;

    @FindBy(xpath = "//input[@id='Password']")
    @CacheLookup
    WebElement passwordField;

    @FindBy(id = "FirstName")
    @CacheLookup
    WebElement firstNameField;

    @FindBy(id = "LastName")
    @CacheLookup
    WebElement lastNameField;

    @FindBy(id = "Gender_Male")
    @CacheLookup
    WebElement genderMale;

    @FindBy(id = "Gender_Female")
    @CacheLookup
    WebElement genderFemale;

    @FindBy(id = "DateOfBirth")
    @CacheLookup
    WebElement dateOfBirth;

    @FindBy(xpath = "//input[@class='form-control text-box single-line'][@id='Company']")
    @CacheLookup
    WebElement companyName;

    @FindBy(xpath = "//input[@id='IsTaxExempt']")
    @CacheLookup
    WebElement isTaxExampt;

    @FindBy(xpath = "//input[@type='checkbox'][@name='SelectedNewsletterSubscriptionStoreIds'][@value='1']")
    @CacheLookup
    WebElement checkNewsletterYourStoreName;

    @FindBy(xpath = "//input[@type='checkbox'][@name='SelectedNewsletterSubscriptionStoreIds'][@value='2']")
    @CacheLookup
    WebElement checkNewsletterTestStore2;

    @FindBy(xpath = "//div[@class='k-multiselect-wrap k-floatwrap']")
    @CacheLookup
    WebElement selectCustomerRole;

    @FindBy(xpath = "//select[@id='VendorId']")
    @CacheLookup
    WebElement managerOfVendor;

    @FindBy(xpath = "//input[@id='Active']")
    @CacheLookup
    WebElement checkAtive;

    @FindBy(xpath = "//textarea[@id='AdminComment']")
    @CacheLookup
    WebElement textArera;

    @FindBy(xpath = "//button[@name='save']")
    @CacheLookup
    WebElement saveButton;

    //Action methods:

    public String getPageTitle(){
        String pageTitle = driver.getTitle();
        return pageTitle;
    }

    public void clickCustomersMenue(){
        customersMenu.click();
    }
    public void clickCustomersList(){
        WebDriverWait driverWait = new WebDriverWait(driver, 10);
        driverWait.until(ExpectedConditions.elementToBeClickable(By.xpath("/html[1]/body[1]/div[3]/div[2]/div[1]/ul[1]/li[4]/ul[1]/li[1]/a[1]/span[1]"))).click();

    }
    public void clickAddNewButton(){
        addNewButton.click();
    }
    public void enterEmailId(String email){
        emailField.sendKeys(email);
    }
    public void enterPassword(String password){
        passwordField.sendKeys(password);
    }
    public void enterFirstName(String firstName){
        firstNameField.sendKeys(firstName);
    }
    public void enterLastName(String lastName){
        lastNameField.sendKeys(lastName);
    }
    public void selectGender(String gender){
        if(gender.equals(gender))
            genderMale.click();
        else
            genderFemale.click();
    }
    public void enterDateOfBirth(String dob){
        dateOfBirth.sendKeys(dob);
    }
    public void enterCompanyName(String company){
        companyName.sendKeys(company);
    }
    public void selectIsTaxExampt(){
        isTaxExampt.click();
    }
    public void selectNewsLetterYourStoreName(){
        checkNewsletterYourStoreName.click();
    }
    public void selectNewsLetterTestStore(){
        checkNewsletterTestStore2.click();
    }
//    public void selectCustomerRole(String custRole){
//        selectCustomerRole.click();
//        List downList = driver.findElements(By.id("SelectedCustomerRoleIds_taglist"));
//        System.out.println("List Size is: " +downList.size());
//        for (int i = 0; i<=downList.size(); i++){
//            System.out.println(downList.get(i));
//            }
//    }
    public void setSelectVendor(){
        managerOfVendor.click();
        Select select = new Select(driver.findElement(By.xpath("//select[@id='VendorId']")));
        select.selectByIndex(2);
    }
    public void selectActiveButton(){
        //checkAtive.click();
    }
    public void writeAnAdminComment(String comment) throws InterruptedException {
        textArera.sendKeys(comment);
        Thread.sleep(5000);
    }
    public void clickOnSaveButton(){
        saveButton.click();
    }

}

