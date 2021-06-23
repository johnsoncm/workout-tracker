const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//name, type, weight, sets, reps, duration

const WorkoutSchema = new Schema ({
   day: {
       type: Date,
       default: ()=> new Date()
       
   },
   exercises: [{

    name: {
        type: String, 
        unique: true,
        required: ''
    },
    type: {
        type: String, 
        unique: false,
        required: ''
    },
    weight: {
        type: Number
    
    },
    sets: {
        type: Number
        
    },
    reps: {
        type: Number
       
    },
    duration: {
        type: Number,
        required: ''
              
    },
    totalDistance: {
        type: Number,
    }
}]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;