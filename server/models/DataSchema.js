const mongoose = require('mongoose')
const DataSchema = new mongoose.Schema({
    pin:{
        type: Number,   
    },
    f1:{
        type: Number,
    },
    f2:{
        type: Number,
    },
    f3:{
        type: Number,
    },
    f4:{
        type: Number,
    },
    f5:{
        type: Number,
    },
    f6:{
        type:Number,
    },
    des:{
        type:String,
    }
})
const Data = mongoose.model("Data", DataSchema);
module.exports= Data