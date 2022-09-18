const express=require("express");
const mongoose=require("mongoose");
const app=express();

const URL="mongodb+srv://Vishwa98:Vishwa98@sms.wklioca.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try{
        await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    }catch(error){
        console.error(error);
    }
}
connect();

app.listen(8001,()=>{
console.log("Port on 8001");
});