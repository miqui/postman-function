pm.test("Verify description of the request", () => {
    const jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql("Engine is started");
});
