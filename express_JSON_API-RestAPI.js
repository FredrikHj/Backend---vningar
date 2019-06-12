// Övning med routes     
const express = require('express');
const app = express();
const fileSystem = require('fs');
app.use(express.json());
const port = 3001;

let movieList = require('./express_JSON_API-RestAPI.json');

// Gets all movies =================================================
app.get('/Movie', (req, res) => {    
    res.send(movieList);
});
// Gets a specific movie
app.get('/Movie/:id', (req, res) => {
    let countItem = 0;
    let getItem;
    let idToNr = parseInt(req.params.id);
    let updatedMovieIndex = movieList.data.findIndex(update => parseInt(update.id) === idToNr);
    
    console.log('Inkommande ID: '+ idToNr);
    console.log('Inkommande index: ');
    console.log(updatedMovieIndex);
    // Get movie object
    let getMovie = movieList.data[updatedMovieIndex];
    res.send(getMovie);
});

// Create a new movie ===============================================
let countID = 0;
function createID() { 
    for (let index = 0; index < movieList.data.length; index++) {
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
app.post('/Movie', (req, res) => {
    console.log('Ny post');

    let objForm = {
        id: JSON.stringify(createID()),
        name: req.body.name,
        rating: req.body.rating,
        genre: req.body.genre,
    };
    movieList.data.push(objForm);
    console.log(movieList);
    
    // Save the movies in an json file
   fileSystem.writeFile('express_JSON_API-RestAPI.json', JSON.stringify(movieList //debugging
     , null, 2
    ), function(err) {
       
        console.log(err);
        
    });
   
    res.send(movieList);
});
// Update a movie ================================================
app.put('/Movie/:id', (req, res) => {
    // Get movie object to update
    let updatedMovie = movieList.data.find((updateMovie) => {
        if (parseInt(req.params.id) === parseInt(updateMovie.id)) {
           
            updateMovie.name = req.body.name;
            updateMovie.rating = req.body.rating;  
            updateMovie.genre = req.body.genre;  
            return updateMovie;
        }
    });
    // Save the movies in an json file
    fileSystem.writeFile('express_JSON_API-RestAPI.json', JSON.stringify(movieList //debugging
        , null, 2
        ), function(err) {
            if (err) {
                console.log(err);
                return;
            }            
    });
    res.status(200);
    res.send({data: updatedMovie});
});
// Update a part of movie
app.patch('/Movie/:id', (req, res) => {
    // Get movie object to update
    let itemIndex = parseInt(req.params.id);
    let updatedMovieIndex = movieList.data.findIndex(update => parseInt(update.id) === itemIndex);
    let updateMovie = movieList.data[updatedMovieIndex];
    console.log('Film att uppdatera');
    console.log(updateMovie);

    // Lopp through the inomming object and add the pair into my object
    for (const loopKey in req.body) {
        console.log(req.body[loopKey]);
        updateMovie[loopKey] = req.body[loopKey];
    }
    // Lopp through the target object to update
    for (const updateMovieKey in updateMovie) {
        console.log(updateMovieKey);
    }
    // New object with updated key/value pair
    let updatedObj = {

    }
    
    // Save the movies in an json file
     fileSystem.writeFile('express_JSON_API-RestAPI.json', JSON.stringify(movieList //debugging
        , null, 2
        ), function(err) {
            if (err) {
                console.log(err);
                return;
            }            
    });
    res.status(200);
    res.send(updateMovie);
});
// Delete a movie ================================================
app.delete('/Movie/:id', (req, res) => {
    console.log('Tabort film');
    let targetId = parseInt(req.params.id);
    
    // Verify if ID
    if (!targetId) {
        res.status(400).end();
        return;
    }
    let deldMovieIndex = movieList.data.findIndex(delMovie => parseInt(delMovie.id) === targetId);
    console.log('Removed movie');
    console.log(deldMovieIndex);
    
    if (deldMovieIndex !== -1) {
        
        // Remove the item in the list
        movieList.data.splice(deldMovieIndex, 1);
    }
    
    
    // Save the movies in an json file
    fileSystem.writeFile('express_JSON_API-RestAPI.json', JSON.stringify(movieList //debugging
    , null, 2
    ), function(err) {
        if (err) {
            console.log(err);
            res.status(204);
            return;
        }
            
    });
        
    res.status(204).end();
});

 app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));