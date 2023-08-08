const express = require('express');
const router=express.Router();
const Event = require('../models/event.js');
const { createEvent, getEvent, getbyidEvent, deleteEvent, updateEvent } = require('../controllers/event.js');
const isAuth = require('../middleware/is_Auth.js');


router.post('/create',isAuth,createEvent);

 router.get('/get',isAuth,getEvent);

 router.get('/getbyid/:id',isAuth,getbyidEvent);

 router.delete('/delete/:id',isAuth ,deleteEvent);

router.put('/update/:id',isAuth,updateEvent);



 module.exports=router;