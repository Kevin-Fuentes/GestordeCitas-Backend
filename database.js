const mongoose= require('mongoose')


mongoose.connect('mongodb+srv://root:root@cluster0-suo1l.mongodb.net/veterinaria?retryWrites=true&w=majority',{
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useFindAndModify:false
}).then(db=>console.log('Conectado a la base de datos'))
.catch(err =>{
     console.error('err :', err);
})
