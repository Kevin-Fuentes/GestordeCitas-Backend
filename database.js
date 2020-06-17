const mongoose= require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/veterinaria',{
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useFindAndModify:false
}).then(db=>console.log('Conectado a la base de datos'))
.catch(err =>{
     console.error('err :', err);
})
