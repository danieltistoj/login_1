const express = require('express')
const engine = require('ejs-mate')
const path = require('path')

const app = express()
//configuraciones

app.set('views',path.join(__dirname,'views'))//dirname regresa la direccion del archivo
app.engine('ejs', engine)
app.set('view engine','ejs')

app.set('port', process.env.PORT || 3000);//aqui decios que tome el puerto del procesador, si no existe que tome el 3000

//Routes
app.use('/', require('./routes/index'))

//empezando el servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor en puerto',app.get('port'))
})