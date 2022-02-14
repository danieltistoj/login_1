const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.render('index')
})
router.get('/registrarse',(req,res,next)=>{
    res.render('registrarse')

})

router.post('/registrarse',(req,res,next)=>{

})
router.get('/login',(req,res,next)=>{
    res.render('login')
})
router.post('/registrarse',(req,res,next)=>{
    
})


module.exports = router //para utilizarlo en otros archivos
