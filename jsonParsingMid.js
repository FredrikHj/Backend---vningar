// Övning med routes     
const express = require('express');
const app = express();
const port = 3000;

// JSON data korrekt format=application/json
function jsonParsing(req, res, next) {
    //req.headers['content-type'] = 'application/json';
   
    console.log('12');  
        
    if (req.headers['content-type'] === 'application/json') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });        
        req.on('end', () => {
          try {
            req.body = JSON.parse(data);
            next();
          } catch (e) {
            res.status(400).end();
          }
        });
    }
    else next();   
}
let data;
app.use(jsonParsing);

app.post('/', (req, res) => {
    let dataStr = '';
    if (req.is('json')) {
        dataStr = 'Data är giltig';
    }
    else dataStr = 'Datan är ogiltig';
    res.send(dataStr);
});
 app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));