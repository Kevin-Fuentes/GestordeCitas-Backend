const express = require('express')
const app = express()
const router = require('./router')
const bodyPasser = require('body-parser')
const cors = require('cors')

const whiteList=['http://localhost:3000']

const corsOptions={

origin: (origin,callback)=>{
const existe = whiteList.some(dominio=> dominio===origin)
if(existe){
     callback(null,true)
}else{
callback(new Error('No Permitido por CORS'))
}

} 
}


app.use(cors())

require('./database')

app.use(bodyPasser.json())
app.use(bodyPasser.urlencoded({extended:true}))
app.use('/',router())
app.listen(4000,()=>{console.log('conectado')})
