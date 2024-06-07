// Import the xml2js library for parsing XML
const xml2js = require('xml2js');

// Get the response text
const responseText = pm.response.text();

// Parse the XML response
xml2js.parseString(responseText, { explicitArray: false }, (err, result) => {
    if (err) {
        // If there's an error parsing the XML, fail the test
        pm.test('XML parsing error', () => {
            throw new Error('Failed to parse XML response');
        });
    } else {
        // Successfully parsed the XML, now you can validate specific elements
        pm.test('Response contains expected elements', () => {
            // Replace 'RootElement' with the actual root element of your XML
            const rootElement = result.RootElement;
            
            // Example: Validate that the root element exists
            pm.expect(rootElement).to.be.an('object');
            
            // Example: Validate specific element values (replace with actual element names)
            // For instance, if your XML has an element called 'Status' within the root
            pm.expect(rootElement.Status).to.eql('Success');
            
            // Example: Validate another element (replace with actual element names)
            // If your XML has a nested element like 'Data.Item'
            pm.expect(rootElement.Data.Item).to.have.length.above(0);
        });
    }
});
