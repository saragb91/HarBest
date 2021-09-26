const mongoose = require('mongoose')

mongoose.connect(`${process.env.DB_REMOTE}`, {useUnifiedTopology:true, useNewUrlParser: true })
        .then(x => {
             console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        })
        .catch(err=> {
            console.log('Error connecting to mongo', err)
        })

        
module.exports = mongoose