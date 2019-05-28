const axios = require('axios');

const assert = require('assert');

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
