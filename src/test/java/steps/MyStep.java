package steps;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class MyStep {

    private static WebDriver driver;

    /////// CT01 /////////

    @Dado("que o usuário esteja no sistema do webmotors")
    public void acessSystem() {
        driver = new ChromeDriver();
        System.setProperty("webdriver.chrome.driver", "/Users/usertqi/Documents/workspace/webMotorsWeb/chromedriver");
        driver.get("https://www.webmotors.com.br/");
        driver.manage().window().maximize();
    }

    @Quando("informar o nome do veículo desejado")
    public void searchVehicle() throws InterruptedException {

        driver.findElement(By.id("searchBar")).click();
        driver.findElement(By.id("searchBar")).sendKeys("Onix");

        Thread.sleep(1000);

    }

    @E("selecionar a opção do modelo")
    public void selectionOption() throws InterruptedException {

        driver.findElement(By.xpath("/html/body/div[1]/main/div[2]/div/div[1]/div[2]/div/div/div/div/div/div[2]/a[2]/div[2]")).click();
        Thread.sleep(15000);
    }

    @Então("o sistema direciona o usuário para a tela de listagem dos veículos disponíveis para venda")
    public void modalLogin() {

        Boolean confirmationSubTitle = driver.findElement(By.className("title-search")).isDisplayed();
        Assert.assertEquals(true, confirmationSubTitle);

        Boolean confirmationResults = driver.findElement(By.cssSelector("div[data-test-id='found-ads']")).isEnabled();
        Assert.assertEquals(true, confirmationResults);

    }

    /////// CT02 /////////

    @E("selecionar o veículo desejado")

    public void selectionOptionVehicle() throws InterruptedException {

        driver.findElement(By.xpath("/html/body/div[1]/main/div[1]/div[3]/div[2]/div/div[1]/div/div[1]/div/div[2]")).click();
        Thread.sleep(1500);
    }

    @Então("o sistema direciona o usuário para a tela de detalhes do veículo")
    public void screenDetailsVehicle() {

        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }

        String confirmationSubTitle = driver.findElement(By.className("explanation-financing__info__title")).getText();
        Assert.assertEquals("Simule seu financiamento sem compromisso!", confirmationSubTitle);

        Boolean confirmationOption = driver.findElement(By.className("modal--close")).isEnabled();
        Assert.assertEquals(true, confirmationOption);

    }

    /////// CT03 /////////

    @E("preencher o formulário com dados válidos")
    public void formComplete() throws InterruptedException {

        for(String winHandle : driver.getWindowHandles()){
            driver.switchTo().window(winHandle);
        }

        driver.findElement(By.className("modal--close")).click();
        driver.findElement(By.xpath("/html/body/div[1]/main/div[2]/div[2]/div/div/div/div/div/form/div/div[1]/input")).sendKeys("Teste Webmotors");
        driver.findElement(By.xpath("/html/body/div[1]/main/div[2]/div[2]/div/div/div/div/div/form/div/div[2]/input")).sendKeys("teste@gmail.com");
        driver.findElement(By.xpath("/html/body/div[1]/main/div[2]/div[2]/div/div/div/div/div/form/div/div[3]/input")).sendKeys("34991060500");
    }

    @E("clicar na opção de Enviar mensagem")
    public void optionProposal() throws InterruptedException {

        driver.findElement(By.xpath("/html/body/div[1]/main/div[2]/div[2]/div/div/div/div/div/button[2]")).click();
        Thread.sleep(4000);
    }

    @Então("o sistema envia a menasagem ao vendedor e retorna o usuário para a tela de listagem de veículos")
    public void messageSucess() {

        Boolean confirmationSubTitle = driver.findElement(By.className("title-search")).isDisplayed();
        Assert.assertEquals(true, confirmationSubTitle);

        Boolean confirmationResults = driver.findElement(By.cssSelector("div[data-test-id='found-ads']")).isEnabled();
        Assert.assertEquals(true, confirmationResults);

    }

}


