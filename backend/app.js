const express = require('express');
const app = express();
const cors = require('cors');
const controller=require('./controller ');



// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  // Parse JSON requests

// Routes
app.get('/users', (req, res) => {
    controller.getUsers(req, res, (response) => {
        res.send();
    });
});

app.post('/createusers', (req, res) => {
    controller.addUser(req.body, (response) => {
        res.send();
    });
});

app.put('/updateusers', (req, res) => {
    controller.updateUser(req.body, (response) => {
        res.send(response);
    });
});

app.delete('/deleteUser', (req, res) => {
    controller.deleteUser(req.body, (response) => {
        res.send(response);
    });
});

module .exports=app;   // Export express app