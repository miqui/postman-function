// Get the API's key
var apiKey = pm.globals.get('api_key')
//get the info on the api key holder so we can personalize the workspace and fork names
 pm.sendRequest({
                url: "https://{the-api}",
                method: 'GET',
                header: {
                    "x-api-key": apiKey,
                } ,
                }, function (err, res) {
                    var data = res.json(); // Grab some data
                    
            }); 
