const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                enum: ["resistance", "cardio"],
                required: "exercise type is required"
            },
            
            name: {
                type: String,
                trim: true,
                required: "exercise name is required"
        
            },
        
            duration: {
                type: Number,
                allowNull:false
            },
        
            distance: {
                type: Number,
                allowNull: true
            },

            weight: {
                type: Number,
                allowNull: true
            },
        
            reps: {
                type: Number,
                allowNull: true
            },
        
            sets: {
                type: Number,
                allowNull: true
            }
        
        
        }
    ]


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;