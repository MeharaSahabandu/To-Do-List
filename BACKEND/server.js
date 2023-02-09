const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require ("dotenv").config();

const routes= require('./routes/ToDoRoute');

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());


//connect database
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, ()=>{
    useNewUrlParser: true;
    useCreateIndex: true;
    useUnifiedTopology: true;
    useFindAndModify:false;
});

app.use(express.json());
app.use(cors());

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("MongoDB connection success !!");
})

app.use(routes);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT} !`);
})

