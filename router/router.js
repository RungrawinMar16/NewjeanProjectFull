const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
   res.render('index.ejs')
})

router.get("/profile",(req,res)=>{
 
    res.render('profile.ejs')
})

router.get("/album",(req,res)=>{
    res.render('album.ejs')
})

router.get("/video",(req,res)=>{
  
    res.render('videos.ejs')
})


module.exports = router