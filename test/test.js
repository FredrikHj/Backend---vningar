const axios = require('axios');

const assert = require('assert');

describe('Test routes - In movie', function() {
    it('Are all movie here?', function() {
        return axios.get('http://localhost:3000/Movie').then(res => {
            assert.ok(res.data !== [], 'Fault');
        })
    });
    it('Are a movie created?', function() {
        let dataArr = [];

        let objForm = {
            name: 'Fredrik',
            rating: 5,
            genre: 'Action'
        }
        return axios.post('http://localhost:3000/Movie', objForm).then(res => {  
            console.log(JSON.parse(res.data).lenght);
            dataArr.push(JSON.parse(res.data).lenght);
            assert.ok(res.data.length > dataArr.length, 'Fault');
        })
    });

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