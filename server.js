const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();

app.use(bodyParser.json());
app.use(cors());

//import routes
const stunetRoutes=require("./routes/Students");
app.use(stunetRoutes);

const PORT=8050;
const DB_URL="mongodb+srv://Vishwa98:Vishwa98@sms.wklioca.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB is connected");
})
.catch((err)=>console.log('DB connection error', err));

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
});


