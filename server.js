const express = require('express')
const app = express()

// app.use('/' , (req, res)=> {
//     res.send('hello world');
// });

app.get('/' , (req, res) => {
    res.send('hai aku method get');
});

app.put('/' , (req, res) => {
    res.send('hai aku method put');
});

app.delete('/' , (req, res) => {
    res.send('hai aku method delete');
});

app.listen(3000, () => {
    console.log("server running on port: 3000");
});