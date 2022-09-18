const express =require("express");
const Students=require('../models/Student');

const router=express.Router();

// save students details
router.post('/student/save', (req,res)=>{
 let newStudent=new Students(req.body);
 newStudent.save((err=>{
    if(err){
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success: "Student save Succesfully"
    });
 }));
});

module.exports=router;