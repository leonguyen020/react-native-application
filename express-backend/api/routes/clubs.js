const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Club = require('../models/club');

router.get('/', (req, res, next) => {
    Club.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        });
});

router.post('/', (req, res, next) => {
    const club = new Club({
        _id: new mongoose.Types.ObjectId(),
        c_id: req.body.c_id,
        c_name: req.body.c_name,
        president: req.body.president,
        vice: req.body.vice,
        financeChief: req.body.financeChief,
        curr_point: req.body.curr_point,
        curr_rank: req.body.curr_rank,
        prev_rank: req.body.prev_rank,
        staffId: req.body.staffId,
    });
    club
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Handling POST reqeust to /clubs',
                createdClub: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        });
});

router.get('/:clubId', (req, res, next) => {
    const id = req.params.clubId;
    Club.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({doc});
            } else {
                res.status(404).json({
                    message: 'No valid entry found for this ID'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        }); 
});

router.patch('/:clubId', (req, res, next) => {
    const id = req.params.clubId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Club.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({result})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error:err});
        });
});

router.delete('/:clubId', (req, res, next) => {
    const id = req.params.clubId;
    Club.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({result})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
});

module.exports = router;