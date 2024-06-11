import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ExampleTest {
    public static void main(String[] args) {
        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";

        // Perform a GET request and validate the response
        given().
            log().all().
        when().
            get("/posts/1").
        then().
            log().all().
            statusCode(200).
            body("userId", equalTo(1)).
            body("id", equalTo(1)).
            body("title", equalTo("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")).
            body("body", notNullValue());
    }
}
