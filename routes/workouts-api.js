const router = require('express').Router();
const { Workout } = require('../models');

//insert (create) a workout

router.post('/api/workouts', ({body}, res) => {
    db.Workout.create(body)
     .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// update a workout

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, {$push: { workouts: _id} }, {new: true} ))
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

router.get('')

//find (read) a workout

router.get('')


//delete a workout
router.delete('')





module.exports = router;