const path = require('path'); // the path-lib is build in, and dosen't require npm-download
const express = require('express');

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

app.listen(port, ()=>{
  console.log('Server is runing on Port:'+ port);
})

///console.log(__dirname + '/../public');  //dirname reference the current directiv, in this case it "server-folder"
//console.log(publicPath);