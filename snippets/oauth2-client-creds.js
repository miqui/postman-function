// OAuth2 details
// todo: obtain these values using Postman v11 secrets feature
const clientId = 'YOUR_CLIENT_ID'; // Replace YOUR_CLIENT_ID with your actual client ID
const clientSecret = 'YOUR_CLIENT_SECRET'; // Replace YOUR_CLIENT_SECRET with your actual client secret
const tokenUrl = 'YOUR_TOKEN_URL'; // Replace YOUR_TOKEN_URL with the URL to obtain the token

// Authentication details
const authDetails = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials'
};

// Use Postman's pm.sendRequest with ES6 features
pm.sendRequest({
    url: tokenUrl,
    method: 'POST',
    header: 'Content-Type:application/x-www-form-urlencoded',
    body: {
        mode: 'urlencoded',
        urlencoded: Object.keys(authDetails).map(key => ({
            key: key,
            value: authDetails[key]
        }))
    }
}, (err, res) => {
    if (err) {
        console.log(`Unable to obtain token: ${err}`);
    } else {
        const jsonResponse = res.json();
        console.log(`Token obtained: ${JSON.stringify(jsonResponse)}`);
        pm.environment.set("accessToken", jsonResponse.access_token); // Saves the access token in an environment variable
    }
});
