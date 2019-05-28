let resData;
let resDataArr = [];

axios.get('http://localhost:3000/Country')
.then((res) => {
    console.log(res);
    
    resData = res.data;
    console.log(resData);
    let getUl = document.querySelector('#ul');
    for (let index = 0; index < resData.length; index++) {
        let getLi = document.createElement('li');
        getLi.textContent = resData[index];
        console.log(getLi);
        
        getUl.appendChild(getLi);
        
    }
});
