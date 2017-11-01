const express = require('express');
const router = express.Router();
const fs = require('fs');
const { mongoose } = require('../db/mongoose');
const { Fighter } = require('../model/fighter');
const contents = fs.readFileSync('./data/fighters.json');
const JsonData = JSON.parse(contents);



/* GET users listing. */
router.get('/', (req, res, next) => {
    Fighter.find({ active: true }).then((fighters) => {
        // if there is data to return, return it
        if (fighters.length > 0) {
            res.json(fighters);
        } else {
            // if there are no records, load some records
            Fighter.insertMany(JsonData, (err, docs) => {
                res.json(docs);
            });
        }
    });
});

router.post('/', (req, res) => {
    const fighter = new Fighter(req.body.data);
    fighter.save().then(doc => {
        res.send(doc)
    }, err => {
       res.status(400).send(err);
    });
});



// router.delete('/:fighterId', function(req, res, next) {
//    var filteredData = JsonData.filter(function(item) {
//       return item.id !==  parseInt(req.params.fighterId);
//    });
//    console.log(filteredData.length)
//    res.json(filteredData);
// });

module.exports = router;
