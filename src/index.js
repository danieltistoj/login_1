const express = require('express')

const app = express()
//configuraciones
app.set('port', process.env.PORT || 3000)//aqui decios que tome el puerto del procesador, si no existe que tome el 3000

 //empezando el servidor

app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'))
})