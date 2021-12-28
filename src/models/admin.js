const mongoose= require('mongoose')

const adminSchema = new mongoose.Schema({

    adminid:{
        type: String,
        required: true,
        unique: true,
    },
    
    role: {
        type: String,
        required: true,
        unique: true,
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

    Date:{
        type:Date,
        default:Date.now,
    } 

})