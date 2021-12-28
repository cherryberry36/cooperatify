const mongoose= require('mongoose')

const hrSchema = new mongoose.Schema({

    userid:{
        type: String,
        required: true,
        unique: true,
    },
    
    firstname: {
        type: String,
        required: true,
    },

    lastname: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    phone:{
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

    Date:{
        type:Date,
        default:Date.now,
    } 

})