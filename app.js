const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.send('<h1> Katheryn White ! :) </h1>')
})

app.get('/show', (req, res) => {

    //res.sendFile('index.html');
    
    res.sendFile('index.html', {root : __dirname})

})

console.log('in the node console');

app.listen(PORT, () => {
    console.log(`Server is running & listening on port: ${PORT}`);
  });