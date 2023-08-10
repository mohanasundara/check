const mongoose = require("mongoose");

const  Personschema = mongoose.Schema({

    
    Name : {  
        type : String ,
        required : true
    },
    Age : {   
        type : String ,
        required : true
    }

    
});

module.exports = mongoose.model("Persons",Personschema);