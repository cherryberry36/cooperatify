const mongoose= require('mongoose')

const loanSchema = new mongoose.Schema({

    staffid:{
        type: String,
        required: true,
        unique: true,
    },
    
   loanamount: {
        type: String,
        required: true,
    },

})