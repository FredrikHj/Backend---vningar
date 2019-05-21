const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile('./hello.txt', (err, data) => {
        res.write(data);
        res.end()
    });    
});
app.listen(port, () =>  console.log(`Example app listening on port ${port}!`))