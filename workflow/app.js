

require('rootpath')();
const express = require('express');
const path = require('path')

const app = express();
const port = 8000

app.use(express.static(path.join(__dirname+'/../','front-bone/templates/')));
// app.use(express.static(path.join(__dirname+'/../','front-bone/css/')));
// app.use(express.static(path.join(__dirname+'/../','front-bone/icon/')));
// app.use(express.static(path.join(__dirname+'/../','front-bone/image/')));


app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile('index2.html');

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })