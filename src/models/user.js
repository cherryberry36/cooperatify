const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({

    staffid:{
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

    address: {
        type: String,
        required: true,
    },

    designation: {
        type: String,
        required: true,
    },

    salary: {
        type: String,
        required: true,
    },

    monthlycontribution: {
        type: String,
        required: true,
    },
})