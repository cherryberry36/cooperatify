const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const connectDatabase = async () =>  {
    const conn = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`MongoDB connected: ${conn.connection.host}`)
            
        }
    
    
    
module.exports = connectDatabase;