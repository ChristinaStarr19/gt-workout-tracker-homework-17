const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    type: {
        type: String,
        default: "resistance",
        required: "Resistance is required"
    },
    
    
    name: {
        type: String,
        trim: true,
        required: "Resistance name is required"

    },

    duration: {
        type: Number,
        allowNull: false
    },

    weight: {
        type: Number,
        allowNull: false
    },

    reps: {
        type: Number,
        allowNull: false
    },

    sets: {
        type: Number,
        allowNull: false
    }


});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;