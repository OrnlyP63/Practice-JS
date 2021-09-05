const express = require('express');
const {spawn} = require('child_process');
const app = express();
const port = 3000

app.get('/', (req, res)=>{
  var largDataSet = [];
  const python = spawn('python', ['script3.py']);

  python.stdout.on('data', function(data){
    console.log('Pipe data from python script...');
    largDataSet.push(data);
  })

  python.on('close', (code)=>{
    console.log('child process close all stdio with code '+code)
    res.send(largDataSet.join(""))
  });

})

app.listen(port, ()=> console.log('Example app listening on port '+port))
