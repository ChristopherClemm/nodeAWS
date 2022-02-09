const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('<h1>Express DEMO</h1><h4> Message: Success</h4> <p>Version 1.0</p>');

})

app.get('/products', (req,res) => {
    res.send([
    {   
        productId: '101',
        price: 100
    },
    {
        productId: '102',
        price: 105
    }

    ])
})

app.listen(port,() => {
    console.log("demo app is up and listening to port 3000")
})