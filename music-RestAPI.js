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
    console.log('Music all');
    let keyListArr = [];
    let page = parseInt(req.query.page);
    let size = parseInt(req.query.size);
    let filter = req.query.filter;
        
    if (!page) page = 1;
    if (!size) size = 20;
    if (!filter) filter = '';

    let newList = musicList.slice((page - 1) * size, page * size);

    // Filter the list on alls key
    let filterList = newList.filter((musicData) => {    
        return musicData.field1.includes(filter) || musicData.key.includes(filter) || musicData.song_title.includes(filter) || musicData.artist.includes(filter);
    })

    console.log('Filter at');
    console.log(filterList);
    
    res.send(filterList);
});
// Get specific music
app.get('/Music/:id', (req, res) => {
    console.log('ta ut specifika ');
    let idToNr = parseInt(req.params.id);

    let musicIndex = musicList.findIndex(music => parseInt(music.field1) === idToNr);
    console.log('Get item nr:');
    console.log(musicList[musicIndex]);


    res.send(musicList[musicIndex]);
});

app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));