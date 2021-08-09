package TestRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features={"classpath:features"},
        tags = "@webMotors",
        glue={"steps"},
        plugin = {"pretty","html:target/report-html","json:target/report.json"}
)
public class Runner {

}