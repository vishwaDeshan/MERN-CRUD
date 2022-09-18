const mongoose=require("mongoose");

const StudentSchema= new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        require:true
    }
});

module.exports=mongoose.model('Students', StudentSchema);
