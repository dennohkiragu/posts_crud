const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://SA:Sqlpass123@crud.jw27bcx.mongodb.net/postManagerDB',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })