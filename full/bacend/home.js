const path = require('path');
 require('dotenv').config()

// thired partty modeule
 const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
 

//bodyparser
app.use(express.json());
// midleweare
app.use(cors()); 
app.use((req,res,next)=>{
    console.log("iam a midleweare");
    next();

});



// app rendering
// app.get("/",function(req,res){
// res.json(bilgates);
// });

// router
const babu = require("./baburouter.js");
// app.use("/babuu",babu);
app.use("/persons",babu);


//deploye


if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,'../frontend/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
})
}
let BASE_URL="8000"
//     if(process.env.NODE_ENV==="production"){
// let BASE_URL = `${req.protocol}://${req.get('host')}`
//     }
// mongodb server
mongoose.connect('mongodb+srv://babu:babu@test.ttwwqrh.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
},(err)=>{
    if(err){
        console.log(err);
    }
    console.log("mongodb connected sucess");

});


// localhost
app.listen (8000, () => {
    console.log("server start 5000");
});










