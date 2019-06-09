// Övning - Ta fram resurser från två olika routes     
const express = require('express');
const app = express();
const fileSystem = require('fs');
app.use(express.json());
const port = 3002;

let carUserList = require('./express_API-RestCarsUsers.json');

let carsCountID = 0;
let usersCountID = 0;

function createID(count) { 
    for (let index = 0; index < carUserList.count.length; index++) {
        let idMax = movieList.data[index];
        countID = idMax.id;
    }
    // Get the last id in my arr of movies
    console.log('Id innan förändring');
    console.log(parseInt(countID));
    
    countID++;
    console.log('44');
    console.log(countID);
    
    return countID;
}
app.post('/Cars', (req, res) => {
    console.log('Ny post - Bilar');

    let objForm = {
        id: JSON.stringify(createID(cars)),
        model: req.body.model
    };
    carUserList.cars.push(objForm);
    
    // Save the movies in an json file
   fileSystem.writeFile('express_API-RestCarsUsers.json', JSON.stringify(carUserList.cars //debugging
     , null, 2
    ), function(err) {
       
        console.log(err);
        
    });
   
    res.send(movieList);
});
app.post('/Users', (req, res) => {
    console.log('Ny post - Användare');

    let objForm = {
        id: JSON.stringify(createID(users)),
        name: req.body.name
    };
    carUserList.users.push(objForm);
    
    // Save the movies in an json file
   fileSystem.writeFile('express_API-RestCarsUsers.json', JSON.stringify(carUserList.users //debugging
     , null, 2
    ), function(err) {
       
        console.log(err);
        
    });
   
    res.send(movieList);
});


// Gets a specific movis
app.get('/Movie/:id', (req, res) => {
    let countItem = 0;
    let getItem;
    let idToNr = parseInt(req.params.id);

    console.log('Inkommande ID: '+ idToNr);
    
    // Get movie object
    movieList.data.find((obj, idx) => {
        countItem++;
        if (idToNr === countItem) {
            console.log('Item nr');
            getItem = movieList.data[idx];
            console.log(getItem);
            
        }      
    });

    console.log('Objekt visas');
    console.log(getItem);
    
    res.send(getItem);
});
app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));