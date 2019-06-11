// Övning - Ta fram musik från: https://github.com/LinkNorth/EC-backend/blob/master/data/data.csv
const parse = require('csv-parse')
const csv=require("csvtojson/v2");

const express = require('express');
const app = express();
const fileSystem = require('fs');
app.use(express.json());

const port = 3000;

// Get the csv data
const csvFilePath ='./dataMusic-RestAPI/data.csv';

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    // Save the data to db
    fileSystem.writeFile('./dataMusic-RestAPI/music-RestAPI.json', JSON.stringify(jsonObj //debugging
        , null, 2
       ), function(err) {
          
           console.log(err);
           
       });
})

let musicList = require('./dataMusic-RestAPI/music-RestAPI.json');

app.get('/Music', (req, res) => {
    console.log('fd');
    
    res.send(musicList);
});
app.get('/Music/:id', (req, res) => {
    console.log('ta ut specifika ');
    let idToNr = parseInt(req.params.id);

    let musicIndex = musicList.findIndex(music => parseInt(music.field1) === idToNr);
    console.log('Get item nr:');
    console.log(musicList[musicIndex]);


  /*   for (let index = 0; index < carUserList['user'].length; index++) {
        const user = carUserList['user'][index].name;
        if (req.params.userName === user) {
            console.log('gtrgbs');
            getUser = carUserList['user'][index];

            for (let index = 0; index < carUserList['car'].length; index++) {
                const carOwner = carUserList['car'][index].ownerName;
                if (user === carOwner) {
                    model.push(carUserList['car'][index].model);
                    console.log(model);
                    
                    console.log('rgeg');
                    
                }
            }


        }
    } */
    res.send(musicList[musicIndex]);
});

app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));