const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    type: {
        type: String,
        default: "cardio",
    },
    
    name: {
        type: String,
        trim: true,
        required: "Cardio name is required"

    },

    duration: {
        type: Number,
        allowNull:false
    },

    distance: {
        type: Number,
        allowNull: false
    },

});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;