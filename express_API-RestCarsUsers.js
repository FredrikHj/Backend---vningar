// Övning - Ta fram resurser från två olika routes     
const express = require('express');
const app = express();
const fileSystem = require('fs');
app.use(express.json());
const port = 3000;

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
        carId: JSON.stringify(createID(users)),
        model: req.body.name
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
app.post('/Users', (req, res) => {
    console.log('Ny post - Användare');

    let objForm = {
        userId: JSON.stringify(createID(users)),
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

app.get('/User/:userId/car/:carId', (req, res) => {
    console.log('fd');
    
    res.send(carUserList);
});
app.get('/', (req, res) => {
    console.log('fd');
    
    res.send(carUserList);
});
app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));