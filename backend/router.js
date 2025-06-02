const express=require('express');   
const router=express.Router();
const controller =require('./controller ');
const { model } = require('mongoose');


router.get('/users',controller.getUsers),
router.post('/createusers',controller.addUser),
router.put('/updateusers',controller.updateUser),
router.delete('/deleteUser',controller.deleteUser);

module.exports=router;

