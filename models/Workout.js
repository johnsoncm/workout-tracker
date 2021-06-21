const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//name, type, weight, sets, reps, duration

const WorkoutSchema = new Schema ({
    name: {
        type: String, 
        unique: true,
        required: true
    },
    type: {
        type: String, 
        unique: false,
        required: true
    },
    weight: {
        type: Number,
        unique: false
    },
    sets: {
        type: Number,
        unique: false
    },
    reps: {
        type: Number,
        unique: false
    },
    duration: {
        type: Number,
        unique: false,
        required: true
    },
    
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;