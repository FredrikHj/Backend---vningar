// Övning med routes     
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
let data;
app.post('/uppercase', (req, res) => {
    data = req.body;
    let dataValue = data.value.toUpperCase(); 

    console.log(dataValue);
    
    data.value = dataValue; 
    /* Vill inte
    if (res.status === 400) {
        dataValue = res.status(400).json({error: 'Fault'});  
    } */
    console.log()
    res.send(dataValue);
});
app.post('/lowercase', (req, res) => {
    data = req.body;
    let dataValue = data.value.toLowerCase(); 

    console.log(dataValue);
    
    data.value = dataValue; 

    console.log()
    res.send(dataValue);
});
app.post('/capitalize', (req, res) => {
    data = req.body;
    let dataValue = data.value.charAt(0).toUpperCase() + data.value.slice(1); 

    console.log(dataValue);
    
    data.value = dataValue; 

    console.log()
    res.send(dataValue);
});

 app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));