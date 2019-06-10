// Övning - Ta fram resurser från två olika routes     
const express = require('express');
const app = express();
const fileSystem = require('fs');
app.use(express.json());
const port = 3000;

let carUserList = require('./express_API-RestCarsUsers.json');

let carsCountID = 0;
let usersCountID = 0;
let current = '';
let countID = 0;
function createID(current) { 
    let currentResurse = carUserList[current];
    console.log(currentResurse);
    let nameCurrentResurseId = current + 'Id';
    console.log(nameCurrentResurseId);
    
    for (let index = 0; index < currentResurse.length; index++) { 
        let idMax = currentResurse[index];
        console.log('IdMax');
        console.log(idMax);
        
        countID = idMax[nameCurrentResurseId];
        console.log('countId');
        console.log(parseInt(countID));
    }
    countID++;
    console.log('44');
    console.log(countID);
 
   return countID;
 }
app.post('/User', (req, res) => {
    console.log('Ny post - Användare');
    current = 'user';
    let objForm = {
        userId: JSON.stringify(createID(current)),
        name: req.body.name
    };
    console.log('42');
    carUserList['user'].push(objForm);
    
    // Save the movies in an json file
   fileSystem.writeFile('express_API-RestCarsUsers.json', JSON.stringify(carUserList //debugging
     , null, 2
    ), function(err) {
       
        console.log(err);
        
    });
   
    res.send(carUserList.users);
});
app.post('/Car', (req, res) => {
    console.log('Ny post - Bil');
    current = 'car';
    let objForm = {
        carId: JSON.stringify(createID(current)),
        model: req.body.model,
        ownerName: req.body.ownerName,
    };
    console.log('42');
    console.log(objForm);
    
    carUserList['car'].push(objForm);

    // Save the movies in an json file
   fileSystem.writeFile('express_API-RestCarsUsers.json', JSON.stringify(carUserList //debugging
     , null, 2
    ), function(err) {
       
        console.log(err);
        
    });
   
    res.send(carUserList.car);
});
app.get('/user/:userName', (req, res) => {
    console.log('ta ut specifika ');
    console.log(req.params.userName);
    let userCarsObj = {};
    let model = [];
    let getUser = '';

    for (let index = 0; index < carUserList['user'].length; index++) {
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
    }
    userCarsObj = {
        owner: getUser.name,
        carModel: model,
    }
    res.send(userCarsObj);

});
app.get('/', (req, res) => {
    console.log('fd');
    
    res.send(carUserList);
});
app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));