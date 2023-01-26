const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

let myName="Katheryn White";


// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/',  (req, res) => {
  res.send('<h1 style="background-color:Pink;"> Helllllllo World </h1>')
})

app.get('/show', (req, res) => {

    //res.sendFile('index.html');
    
    //res.sendFile('index.html', {root : __dirname})

    res.send(`<h3 <h1 style="background-color:Blue;"> Hi, ${ myName } </h3>`)

})

app.get('/ejs', (req, res) => {
  console.log("in /ejs before render:", myName);
  
  res.render('index', {myname: myName});
  console.log("after render /ejs:", myName);
})

app.get('/name', (req, res) => {
  console.log("in get to slash name", req.params.ejsFormName);
})

console.log('in the node console');

app.listen(PORT, () => {
    console.log(`Server is running & listening on port: ${PORT}`);
  });
