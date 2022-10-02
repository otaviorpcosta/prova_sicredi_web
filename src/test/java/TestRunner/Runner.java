package TestRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features={"classpath:features"},
        tags = "@ct02",
        glue={"steps"}
)
public class Runner {

}