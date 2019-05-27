// Övning med cookies
const express = require('express');
var cookieParser = require('cookie-parser');
const app = express();
const fileSystem = require('fs');
app.use(express.json());
app.use(cookieParser());

//const config = require('./countriesAPIconfig.json');
const port = process.env['node_env1'];
let countryList = require('./countriesAPI.json');
//let getListStartIndex = 0;

console.log(process.env['node_env2']);
let saveCookie = [];

function pageQuantity(myList, queryStr) {       
    let page = parseInt(queryStr.page);
    let size = parseInt(queryStr.size);
    if (!page) page = 1;
    if (!size) size = 20;
     
    /*  parsedToNr -1;
    console.log('Start index: ' + getListStartIndex);
    
    console.log('End index: ' + receiveEndIndex); */
    
    //getListStartIndex = receiveEndIndex + 1;
    //let sendPaginationList = myList.slice[getListStartIndex, receiveEndIndex];
    let newList = myList.slice((page - 1) * size, page * size);
    console.log('28');
    //console.log(newList);
    
    return newList;
}
// Gets all movies =================================================
app.get('/Country', (req, res) => {    
    let myList = [];
    let newList = [];
    for (const countryListSend in countryList) {
        getList = countryList[countryListSend];   
        myList.push(getList);
    }
    
    console.log('42');
    let sendList = pageQuantity(myList, req.query);
    
    res.send(sendList);
});
// Gets a specific movis


app.get('/setCookie', (req, res) => {
    let queryName = req.query.Name;
    res.cookie('name', queryName).send();

    

    
    //req.cookie = cookieHeader.Url;
    console. log(req.cookies.name);
    
    
    
    /* let queryName = req.query.Name;
    console.log(queryName);
    let cookieName = req.cookies;
    console.log(cookieName);
    cookieName = queryName;
    */    //saveCookie.push(req.query.Name);
    //res.send(saveCookie[0]);
});
app.get('/getCookie', (req, res) => {
    res.send('Hello ' + req.cookies.name)
});


app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));