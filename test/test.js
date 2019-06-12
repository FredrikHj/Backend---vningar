const axios = require('axios');
const assert = require('assert');

describe('Test routes - In movie', function() {
/*     it('Are all movie here?', function() {
        return axios.get('http://localhost:3001/Movie').then(res => {
            assert.ok(res.data.data !== [], 'Fault');
        })

    });
    it('Are a movie created?', function() {
        let objForm = {
            name: 'Fredrik',
            rating: '5',
            genre: 'Action'
        }
        return axios.post('http://localhost:3001/Movie', objForm).then(resp => {  
            let newItem = resp.data.data.pop();
            assert.ok(newItem !== {}, 'Fault');
        })
    }); */
    it('Are a movie updated?', function() {
        let obj = {
            name: 'Fredrfvdik'
        }
        return axios.put('http://localhost:3001/Movie/7', obj).then(resp => {            
            assert.ok(resp.status === 200, 'Fault');
        })
    });
    it('Are a movie deleted?', function() {
        return axios.delete('http://localhost:3001/Movie/8').then(resp => {            
            assert.ok(resp.status === 204, 'Fault');
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