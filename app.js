const express=require("express");
const fs =require("fs");
const path = require("path");
const app=express();
const port=8000;

app.use("/static",express.static("static"));
app.use(express.urlencoded());

app.set("view engine",'pug');// set template engine as pug
app.set('views',path.join(__dirname,"template"));// set the views directory

app.get('/', function (req, res) {
    const pin = {};
    res.status(200).render('index.pug',pin);
})

app.listen(port,function(){
    console.log(`App is running on port ${port}`);
}) 