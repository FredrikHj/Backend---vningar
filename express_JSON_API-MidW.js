// Övning med routes     
const express = require('express');
const app = express();
app.use(express.json());

// Loggar alla anrop
let midLog = function (req, res, next) {
    console.log('Metod: ' + req.method + ' path: ' + req.path// + ' Status: '//+ res.status(400).end()
    );
    next();
}
// JSON data korrekt format?
function midCheck(req, res) {
    //console.log('ecs<d');
    if (req.body.value === '') {
        console.log('Inne vrv');
        
        //res.status(400).end();
        return true;
    } else return false;
    next();
}
const port = 3000;
let data;
app.use(midLog);

app.post('/uppercase', (req, res) => {
    console.log('Ceck funktion: ' + midCheck(req, res));
    
    if (midCheck(req, res) === true) return;
    
    data = req.body;
    let dataValue = data.value.toUpperCase(); 

    data.value = dataValue; 

    console.log(dataValue);
    res.send(dataValue);
});
app.post('/lowercase', (req, res) => {
    data = req.body;
    let dataValue = data.value.toLowerCase(); 
    console.log(dataValue);
    data.value = dataValue; 
    res.send(dataValue);
});
app.post('/capitalize', (req, res) => {
    data = req.body;
    let dataValue = data.value.charAt(0).toUpperCase() + data.value.slice(1); 

    console.log(dataValue);
    
    data.value = dataValue; 
    res.send(dataValue);
});

 app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));