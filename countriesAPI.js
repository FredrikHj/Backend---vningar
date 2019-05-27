// Övning med routes     
const express = require('express');
const app = express();
const fileSystem = require('fs');
app.use(express.json());
const port = 3000;
let countryList = require('./countriesAPI.json');
//let getListStartIndex = 0;

function pageQuantity(myList, queryStr) {    
    let page = parseInt(queryStr.page);
    let size = parseInt(queryStr.size);
    if (!page) page= 1;
    if (!size) size = 20;
    
    /*  parsedToNr -1;
    console.log('Start index: ' + getListStartIndex);
    
    console.log('End index: ' + receiveEndIndex); */
    
    //getListStartIndex = receiveEndIndex + 1;
    //let sendPaginationList = myList.slice[getListStartIndex, receiveEndIndex];
    let newList = countryList.slice((page - 1) * size, page * size);
    console.log('21 ' + newList);
    
    return newList;
}
// Gets all movies =================================================
app.get('/Country', (req, res) => {    
    let myList = [];
    for (const countryListSend in countryList) {
        getList = countryList[countryListSend];   
        myList.push(getList);
    }
    pageQuantity(mylist, req.query);

    //console.log(sendList);
    
    res.send(sendList);
});
// Gets a specific movis

app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));