const express=require('express');
const app=express();
const eventRoute=require('./routes/event');
const cors = require('cors');

require('./config/connect');


app.use(cors());
app.use(express.json());
app.use('/event',eventRoute);

app.listen(3000,()=>{
    console.log('server is working');
})