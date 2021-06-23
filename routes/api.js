const router = require('express').Router();
const Workout = require('../models/Workout.js');

//insert (create) a workout

router.post('/api/workouts', (req, res) => {
    Workout.create({})
     .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log('error',err)
        res.json(err);
    });
});

// update a workout

router.put('/api/workouts/:id', ({body, params}, res) => {
    console.log({body})
    Workout.findByIdAndUpdate(
        params.id, 
        {$push: {exercises: body}},
        {new: true, runValidators: true}
    )
       .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

router.get('/api/workouts', (req, res) =>{
   Workout.find()
   
    // Workout.aggregate([
    //     {
    //         $addFields: {
    //             totalDuration: {
    //                 $sum: '$exercises.duration'
    //             }
    //         }
    //     }
    // ])
    .then(dbWorkout => {
      const updatedData = dbWorkout.map(workout=>{
          const totalDuration = workout.exercises.reduce((acc, curr) => acc+curr.duration, 0)
        return {day: workout.day, exercises: workout.exercises, totalDuration, _id: workout._id}
        
          
      })
        res.json(updatedData);
    })
    .catch(err => {
        res.json(err);
    })
})


router.get('/api/workouts/range', (req, res) =>{
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
    .sort({
        _id: -1
    })
    .limit(7)
    .then(dbWorkout => {
        console.log("workouts", dbWorkout)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})


//delete a workout
router.delete('/api/workouts', ({body}, res) => {
    Workout.findByIdAndDelete(body.id)
    .then( () => {
        res.json(true)
    })
    .catch(err => {
        res.json(err);
    });

});

module.exports = router;