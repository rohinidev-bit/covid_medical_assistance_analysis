const express = require('express');
const mongoose =  require('mongoose');
const cors = require('cors');
const app = express();
const DataModel = require('./models/DataSchema');
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://rohini:covid19@cluster0.3h6gt.mongodb.net/covid_data?retryWrites=true&w=majority', 
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
app.post('/insert', async (req, res) =>{
    const pin = req.body.pin
    const f1 = req.body.f1
    const f2 = req.body.f2
    const f3 = req.body.f3
    const f4 = req.body.f4
    const f5 = req.body.f5
    const f6 = req.body.f6
    const des = req.body.des
    const data = new DataModel({pin:pin, f1:f1, f2:f2,f3:f3,f4:f4,f5:f5,f6:f6,des:des});
    try{
        await data.save();
        res.send("inserted");
    } catch(err){
        console.log(err);
    }
});
app.listen(3000, ()=>{
    console.log('server running on port 3000')
});