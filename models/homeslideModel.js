const mongoose = require('mongoose')


const homeslideSchema = new mongoose.Schema({
    homeslide_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    button:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    },
    link:{
        type: String,
        required: true
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Homeslides", homeslideSchema)