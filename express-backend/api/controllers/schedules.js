const Schedule = require('../models/schedule');
const mongoose = require('mongoose');

exports.get_all_schedules = (req, res, next) => {
    Schedule.find()
        .select('-__v') //Control which data you want to fetch
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                schedule: docs.map(doc => {
                    return {
                        clubId: doc.clubId,
                        accountId: doc.accountId,
                        time: doc.time,
                        eventStart: doc.eventStart,
                        eventEnd: doc.eventEnd,
                        description: doc.description,
                        proposalStatus: doc.proposalStatus,
                        submitDate: doc.submitDate,
                        reportStatus: doc.reportStatus,
                        reportDate: doc.reportDate,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: req.protocol + '://' + req.get('host') + req.originalUrl + doc._id //dynamic url get instead of hardcode
                        }
                    }
                })
            };
            res.status(200).json(response)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        });
}

exports.post_schedule = (req, res, next) => {
    const schedule = new Schedule({
        _id: new mongoose.Types.ObjectId(),
        clubId: req.body.clubId,
        accountId: req.body.accountId,
        time: req.body.time,
        eventStart: req.body.eventStart,
        eventEnd: req.body.eventEnd,
        description: req.body.description,
        proposalStatus: req.body.proposalStatus,
        submitDate: req.body.submitDate,
        reportStatus: req.body.reportStatus,
        reportDate: req.body.reportDate,
    });
    schedule
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Created schedule successfully',
                createdSchedule: {
                    clubId: result.clubId,
                    accountId: result.accountId,
                    time: result.time,
                    eventStart: result.eventStart,
                    eventEnd: result.eventEnd,
                    description: result.description,
                    proposalStatus: result.proposalStatus,
                    submitDate: result.submitDate,
                    reportStatus: result.reportStatus,
                    reportDate: result.reportDate,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: req.protocol + '://' + req.get('host') + req.originalUrl + result._id //dynamic url get instead of hardcode
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        });
}

exports.get_by_id = (req, res, next) => {
    const id = req.params.scheduleId;
    Schedule.findById(id)
        .select('-__v')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: req.protocol + '://' + req.get('host') + req.originalUrl
                    }
                });
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
}

exports.get_by_clubId = (req, res, next) => {
    const id = req.params.clubId;
    Schedule.find({clubId: id}).limit(1)
        .select('-__v')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: req.protocol + '://' + req.get('host') + req.originalUrl
                    }
                });
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
}

exports.patch_schedule = (req, res, next) => {
    const id = req.params.scheduleId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Schedule.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Schedule updated',
                request: {
                    type: 'GET',
                    url: req.protocol + '://' + req.get('host') + req.originalUrl
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error:err});
        });
}

exports.delete_schedule = (req, res, next) => {
    const id = req.params.scheduleId;
    Schedule.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Schedule deleted',
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}