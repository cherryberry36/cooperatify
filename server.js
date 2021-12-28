const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDatabase = require('./src/config/db.js');


//connect Database
connectDatabase();

const app = express()

// logging middleware

if (process.env.NODE_ENV === 'development'){
    app.use(morgan ('dev'));
}

const port= process.env.PORT || 4000


app.listen(port,()=> console.log(`server is running on ${port}`))