pm.test("Validate SOAP XML Response", function () {
    // 1. Get XML Response
    const responseXml = pm.response.text();

    // 2. Convert to JSON for Easier Parsing
    const responseJson = xml2Json(responseXml); // Use Postman's xml2Json() function

    // 3. Basic Validation (Customize as Needed)
    pm.response.to.have.status(200); // Check for successful status code

    pm.expect(responseJson).to.not.be.undefined;  // Ensure valid XML parsed to JSON

    // Example checks for specific XML elements/values
    pm.expect(responseJson["soap:Envelope"]).to.exist;
    pm.expect(responseJson["soap:Envelope"]["soap:Body"]).to.exist;

    // More specific assertions:
    const body = responseJson["soap:Envelope"]["soap:Body"];
    pm.expect(body["YourAPIResponse"]).to.exist; // Replace 'YourAPIResponse' with your actual response element
    pm.expect(body["YourAPIResponse"]["Result"]).to.equal("Success"); // Example value check
});
