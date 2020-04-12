package testRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {".//Features/"},
                    //strict = true,
                    glue = "stepDefinitions",
                    dryRun = false,
                    monochrome = true,
                    plugin = {"pretty", "html:test-report"}
                    //tags = {"@sanity", "@regression"}
                    )
public class TestRunner {
}
