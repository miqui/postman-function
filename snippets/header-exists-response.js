pm.test("Check for header existence", function () {
    const headers = pm.response.headers.all();
    const targetHeader = "Content-Type";

    const headerExists = headers.some(header => header.key.toLowerCase() === targetHeader.toLowerCase());
    
    if (headerExists) {
        const foundHeader = headers.find(header => header.key.toLowerCase() === targetHeader.toLowerCase());
        pm.expect(foundHeader).to.not.be.undefined;
        pm.expect(foundHeader.value).to.include("application/json"); // Example assertion on the header value
    } else {
        pm.expect.fail(`Header '${targetHeader}' not found.`);
    }
});
