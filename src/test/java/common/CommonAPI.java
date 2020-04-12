package common;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import pageObjectRepository.AddNewCustomerPage;
import pageObjectRepository.NopCommercePageObjectRepository;
import pageObjectRepository.SearchCustomersPage;

public class CommonAPI {
    public static WebDriver driver;
    public static NopCommercePageObjectRepository nopCPORepository;
    public static AddNewCustomerPage addCust;
    public static SearchCustomersPage searchCust;


    //This method is created for generating random string unique email ID
    public static String randomString(){
        String generatedRandomString = RandomStringUtils.randomAlphabetic(6);
        return generatedRandomString;
    }
}
