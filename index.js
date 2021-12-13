const app = require('./config/custom-express')();
const axios = require('axios');

app.get('/', async (req, res) => {

    try{

    const data = await axios.get('http://jsonplaceholder.typicode.com/todos');

    console.log(data);
    
    return data;
    }catch(error){
        console.log(error);
        return false;
    }
    
});

app.listen('3000');