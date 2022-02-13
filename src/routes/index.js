const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.render('index')
})
router.get('/registrarse',(req,res,next)=>{

})
router.post('/registrarse',(req,res,next)=>{

})
router.get('/entrar',(req,res,next)=>{

})

module.exports = router //para utilizarlo en otros archivos
