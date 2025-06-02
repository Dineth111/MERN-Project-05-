const app = require('./app');
const port = 3001;
const host = 'localhost';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router=require('./router');



app.use(cors());
app.use(express.json());

// Database connection
const uri = 'mongodb+srv://admin1:admin.123@cluster0.ef9wk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });  //conect uri 
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
};

// Call the connect function to establish the database connection
connect();

// Server connection
const server = app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});



app.use('/api',router);