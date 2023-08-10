

const express = require("express");


const router = express.Router();
const Persons = require("./babuschema");

//image upload


//post

router.post("/post",async(req,res)=>{
    const name = req.body.Name
    const age = req.body.Age
    console.log(name)

    var data = new Persons({
        Name : name,
        Age : age
        

    }) ;
    await data.save();
    res.json(data);

})


 

// //     try{
       
// // const postperson = await new Persons({ 
// //     Name : full
// // });
// // const saveperson = await postperson.save();
// // res.status(200).json (saveperson);

// //     }
// //     catch(err){

// //         res.json("error for backend");
// //     }
    
// })

//getall
router.get("/get",async(req,res)=>{
    
    try{
        const getall = await Persons.find();
        console.log(getall);
res.status(200).json(getall);
    }
    catch(err){
        res.json("error");
    }
});

// //getid
// router.get("/:id",async(req,res)=>{
//     console.log(req.params.id);
//     try{
//         const getid = await Persons.findById (req.params.id);
//         console.log(getid);
// res.status(200).json(getid);
//     }
//     catch(err){
//         res.json("error");
//     }
// });


//update
router.put("/up/:id",async(req,res)=>{
    console.log(req.params.id);
 
    try{
        const up = await Persons.updateOne({_id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}});
        console.log(up);
res.status(200).json(up);
    }
    catch(err){
        res.json("error");
    }
});

//delete
router.delete("/del/:id",async(req,res)=>{
    console.log(req.params.id);
 
    try{
        const deldata = await Persons.findByIdAndRemove(req.params.id).then(e=>{
            console.log(deldata);
            
            res.status(200).json(deldata);
        });
     
 
    }
    catch(err){
        res.json("error");
    }
});






const multer = require("multer");
const path = require('path');

  var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads');
    },
    filename:function(req,file,cb){

        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    } 
    
  })
  var upload = multer({
    storage:storage
  })
 


//bodyparser
 


module.exports = router;
 