package steps;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import org.junit.AfterClass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MyStep {

    private static WebDriver driver;

    /////// CT01 /////////

    @Dado("que o usuário esteja no sistema do grocerycrud")
    public void acessSystem() {

        WebDriverManager.chromedriver().setup();

        ChromeOptions optionsC = new ChromeOptions();
        optionsC.addArguments(Arrays.asList("disable-infobars", "ignore-certificate-errors",
                "disable-popup-blocking", "disable-notifications", "no-sandbox"));
        driver = new ChromeDriver(optionsC);
        driver.manage().window().maximize();
        driver.get("https://www.grocerycrud.com/v1.x/demo/my_boss_is_in_a_hurry/bootstrap");

    }

    @Quando("alterar a versão do crud para Boostra V4 Theme")
    public void updatedVersion(){

        driver.findElement(By.xpath("//option[@value='/v1.x/demo/my_boss_is_in_a_hurry/bootstrap-v4']")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }
    @E("clicar na opção de adicionar customer")
    public void selectionOption() throws InterruptedException {

        driver.findElement(By.xpath("//div[@class='floatL t5']/a")).click();
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='table-label']/div[1]")));
    }
    @E("preencher dados de {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
    public void fillDate(String Name, String LastName, String ContactFirstName, String Phone, String AddressLine1, String AddressLine2, String City, String State, String PostalCode, String Country, String Employeer, String CreditLimit) throws InterruptedException {

        driver.findElement(By.id("field-customerName")).sendKeys(Name);
        driver.findElement(By.id("field-contactLastName")).sendKeys(LastName);
        driver.findElement(By.id("field-contactFirstName")).sendKeys(ContactFirstName);
        driver.findElement(By.id("field-phone")).sendKeys(Phone);
        driver.findElement(By.id("field-addressLine1")).sendKeys(AddressLine1);
        driver.findElement(By.id("field-addressLine2")).sendKeys(AddressLine2);
        driver.findElement(By.id("field-city")).sendKeys(City);
        driver.findElement(By.id("field-state")).sendKeys(State);
        driver.findElement(By.id("field-postalCode")).sendKeys(PostalCode);
        driver.findElement(By.id("field-country")).sendKeys(Country);
        driver.findElement(By.id("field-salesRepEmployeeNumber")).sendKeys(Employeer);
        driver.findElement(By.id("field-creditLimit")).sendKeys(CreditLimit);

    }
    @E("clicar na opção de Save")
    public void selectionOptionSave() throws InterruptedException {

        driver.findElement(By.id("form-button-save")).click();
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("report-success")));

    }
    @Então("o sistema exibe mensagem informando Your data has been successfully stored into the database. Edit Record or Go back to list")
    public void modalLogin() {

        String confirmationMessageSucess= driver.findElement((By.xpath("//div[@id='report-success']/p"))).getText();
        Assert.assertEquals("Your data has been successfully stored into the database. Edit Record or Go back to list", confirmationMessageSucess);

        tearDown();

    }

    /////// CT02 /////////

    @E("clicar na opção de Save and go back to list")
    public void selectionOptionSaveAndaBack() throws InterruptedException {

        driver.findElement(By.id("save-and-go-back-button")).click();
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='floatL t5']/a")));

    }
    @E("buscar o {string} cadastrado no campo de busca por CustomerName")
    public void searchCustomerName(String Name) {

        driver.findElement(By.xpath("//input[@name='customerName']")).sendKeys(Name);
        driver.findElement(By.xpath("//a[@class='btn btn-default btn-outline-dark gc-refresh']")).click();

    }
    @E("clicar no checkbox de selecionar todos os resultados e clicar na opção de Delete")
    public void selectedAll() throws InterruptedException {

        Thread.sleep(1000);
        driver.findElement(By.xpath("//input[@class='select-all-none']")).click();
        driver.findElement(By.xpath("//a[@title='Delete']")).click();

        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn btn-danger delete-multiple-confirmation-button']")));
    }

    @E("validar o modal exibido com a mensagem Are you sure that you want to delete this X item?")
    public void modalTilte() {

        String itemsAmount = driver.findElement(By.xpath("//span[@class='delete-items-amount']")).getText();

        if ("2".equals(itemsAmount)) {
            String alertDelete = driver.findElement(By.xpath("//p[@class='alert-delete-multiple']")).getText();
            Assert.assertEquals("Are you sure that you want to delete those " + itemsAmount + " items?", alertDelete);
        }
        else {
            String alertDeleteOneItem = driver.findElement(By.xpath("//p[@class='alert-delete-multiple-one']")).getText();
            Assert.assertEquals("Are you sure that you want to delete this 1 item?", alertDeleteOneItem);
        }

    }
    @E("clicar na opção delete do modal exibido")
    public void buttonDeleteModal() throws InterruptedException {

        driver.findElement(By.xpath("//button[@class='btn btn-danger delete-multiple-confirmation-button']")).click();

        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@class='btn btn-danger delete-multiple-confirmation-button']")));
    }
    @E("o sistema exibe mensagem informando Your data hasbeen successfully deleted from the database.")
    public void messagemAlert() {

        WebDriverWait wait = new WebDriverWait(driver, 100);
        WebElement el = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='alert alert-success growl-animated animated bounceInDown']/span[@data-growl='message']/p")));
        String message = el.getText();

        Assert.assertEquals("Your data has been successfully deleted from the database.", message);
        tearDown();
    }

    @AfterClass()
    protected void tearDown() {
        driver.quit();
        driver = null;
    }
}


