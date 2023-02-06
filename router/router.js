const express = require('express')
const router = express.Router()

router.get("/index",(req,res)=>{
   res.render('index.ejs')
})

router.get("/profile",(req,res)=>{
 
    res.render('profile.ejs')
})

router.get("/album",(req,res)=>{
    res.render('album.ejs')
})


module.exports = router