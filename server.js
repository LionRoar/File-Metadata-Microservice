const express = require('express');
const multer = require('multer');

const app = express();

const getSize = multer().single('file');
app.use(express.static('public'));

app.get('/',(req,res)=>{
  res.status(200).sendFile(__dirname+'/views/index.html');
});

app.post('/get-sz',(req,res)=>{
  getSize(req, res , (err)=>{
    if(err )
    {
      console.log('Error::',err);
      res.status(500).send({error:'INTERNAL SERVER ERROR'});
    }
    else if(!req.file) {
      res.status(500).send({error:'No File specified'});
    }
    else {
        res.send({size:req.file.size});
    }
  });
});

const port = process.env.PORT||3000;

app.listen(port,()=>console.log("server is ready.."));
