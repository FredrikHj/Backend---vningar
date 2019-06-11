const axios = require('axios');
const assert = require('assert');

describe('Test routes - In movie', function() {
    /* it('Are all movie here?', function(done) {
        return axios.get('http://localhost:3000/Movie').then(res => {
            assert.ok(res.data.data !== [], 'Fault');
            done();
        })

    });
    it('Are a movie created?', function() {
        let objForm = {
            name: 'Fredrik',
            rating: '5',
            genre: 'Action'
        }
        return axios.post('http://localhost:3000/Movie', objForm).then(resp => {  
            let newItem = resp.data.data.pop();
            assert.ok(newItem !== {}, 'Fault');
        })
    }); */
    it('Are a movie updated', function() {
        return axios.get('http://localhost:3000/Movie/4').then(res => {

            let incomminBeforeUpdateName = res.data.name;
            let incomminBeforeUpdateRating = res.data.rating;
            let incomminBeforeUpdateGenre = res.data.genre;

            let checkUpdateBefore = {
                name: incomminBeforeUpdateName,
                rating: incomminBeforeUpdateRating,
                genre: incomminBeforeUpdateGenre
            };
            
            let objForm = {
                name: 'Ole',
                rating: "7",
                genre: 'Drama'
            }
            axios.put('http://localhost:3000/Movie/4', objForm).then(res => {
                let incomminAfterUpdateName = res.data.data.name;
                let incomminAfterUpdateRating = res.data.data.rating;
                let incomminAfterUpdateGenre = res.data.data.genre;
                
                let checkUpdateAfter = {
                    name: incomminAfterUpdateName,
                    rating: incomminAfterUpdateRating,
                    genre: incomminAfterUpdateGenre
                };       
                
                console.log('Före');
                console.log(checkUpdateBefore);
                console.log('Efter');
                console.log(checkUpdateAfter);               
                assert.notDeepStrictEqual(checkUpdateBefore, checkUpdateAfter //, 'The two object is equal = Not update'
                );
            })
        })       
    });
/*     it('Are a movie deleted?', function() {
        axios.delete('http://localhost:3000/Movie/4').then(resp => {            
            assert.ok(resp.status === 204, 'Fault');
        })
    }); */

});
/* 
describe('Test routes', function() {
    it('Is the array greater than 0?', function() {
        return axios.get('http://localhost:3000/Country').then(res => {       
            assert.ok(res.data.length > 0, 'Fault');
        })
    });
    it('Getting a OK status code?', function() {
        return axios.get('http://localhost:3000/Country').then(res => {       
            assert.ok(res.status, 'Fault');
        })
    });
    it('Getting a status code when sending wrong data?', function() {
        return axios.get('http://localhost:3000/Country').then(res => {       
            assert.deepStrictEqual(res.status, res.status === 400, 'Fault');
        })
    });
});
 */