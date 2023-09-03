const express=require('express')
const router=express.Router();
const Collection2=require('../../models/Collection2')
router.get('/',async (req,res)=> {
    // const response=await Collection2.find({},{_id:0,Timestamp:0,"Email address":0,"passedout year":1,branch:1,"present status":1,"present location":1,salary:1,"personal mail(if students want to contact you)":1,"company name or job title (optional)":1,"anything that you want to share with others":1})
    const response=await Collection2.find({},{_id:0,Timestamp:0})
   
    res.json({response})
    // res.end('alumini route');
},[]);

module.exports=router;