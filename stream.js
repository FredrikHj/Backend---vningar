let axios = require('axios');

process.stdin.on('data', data => {
    axios.get(data.toString())
        .then(res => {
            console.log(res);
        })
});