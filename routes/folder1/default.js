const express=require('express')
const router=express.Router();
const jwt=require('jsonwebtoken')
const data=require("../../config/default")
const {check,validationResult}=require('express-validator');

const bcrypt=require('bcryptjs');
router.get('/',async (req,res)=> {
    
    res.send('default route');
});

module.exports=router;