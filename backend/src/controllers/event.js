const mongoose = require('mongoose');
const Event = require('../models/event');


const createEvent=(async (req,res)=>{

    try {
        data=req.body;
        evt=new Event(data);
        savedevent=await evt.save();
        res.send(savedevent)
    } catch (err) {
        (err)=>{
            console.error('Error creating event in the backend:', err);
            res.status(500).send(err);
        }
    }

 })

 const getEvent = (async (req,res)=>{
    try {
        events=await Event.find();
        res.send(events)
    } catch (error) {
        req.send(error)
    }
 })

 const getbyidEvent = (async (req,res)=>{
    try {
        myid=req.params.id;
        events=await Event.findOne({_id:myid});
        res.send(events)
    } catch (error) {
        res.send(error)
    }
 })

 const deleteEvent=(async (req,res)=>{
    try {
        myid=req.params.id;
        events=await Event.findOneAndDelete({_id:myid});
        res.send(events);
    } catch (error) {
      res.send(error)
    }
})

const updateEvent=(async (req,res)=>{
    try {
        myid=req.params.id;
        newData=req.body;
        update=await Event.findOneAndUpdate({_id:myid},newData);
        res.send(update);
    } catch (error) {
        res.send(error)
    }
 })

 module.exports={
    createEvent,
    getEvent,
    getbyidEvent,
    deleteEvent,
    updateEvent
 }

