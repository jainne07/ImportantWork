const express=require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app=express()
const feedRoutes=require('./routes/feed');
const { fileCreate } = require("./data/util");
// app.use('/',(req,res,next)=>{
//     res.send('<h2>Hurrah server created and soon api run</h2>')
// })
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
  });
app.use('/feed',feedRoutes)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(8080);