const xml2js = require('xml2js');
let jsonResponse;
xml2js.parseString(pm.response.text(),{explicitArray: false}, (err, result)=>{
    jsonResponse = result;
});
console.log(jsonResponse);
console.log(xml2Json(responseBody));
