const mongoose= require('mongoose')

const transactionSchema = new mongoose.Schema({

    userid:{
        type: String,
        required: true,
        unique: true,
    },
    
    transactionid: {
        type: String,
        required: true,
        unique: true,
    },

    status: {
        type: String,
        required: true,  
    },

    isapproved: {
        type: String,
        required: true,  
    },

})