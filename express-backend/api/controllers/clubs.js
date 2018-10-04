const Club = require('../models/club');
const mongoose = require('mongoose');

exports.get_all_clubs = (req, res, next) => {
    Club.find()
        .select('-__v') //Control which data you want to fetch, exclude the __v
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                club: docs.map(doc => {
                    return {
                        clubId: doc.clubId,
                        clubName: doc.clubName,
                        president: doc.president,
                        vice: doc.vice,
                        finance: doc.finance,
                        currPoint: doc.currPoint,
                        currRank: doc.currRank,
                        prevRank: doc.prevRank,
                        staffId: doc.staffId,
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

exports.get_by_id = (req, res, next) => {
    const id = req.params.clubId;
    Club.findById(id)
        .select('-__v')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    club: doc,
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

exports.get_by_rank = (req, res, next) => {
    const rank = req.params.currRank
    Club.find({currRank: rank})
        .select('-__v') //Control which data you want to fetch, exclude the __v
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                club: docs.map(doc => {
                    return {
                        clubId: doc.clubId,
                        clubName: doc.clubName,
                        president: doc.president,
                        vice: doc.vice,
                        finance: doc.finance,
                        currPoint: doc.currPoint,
                        currRank: doc.currRank,
                        prevRank: doc.prevRank,
                        staffId: doc.staffId,
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

exports.post_club = (req, res, next) => {
    Club.find({ clubName: req.body.clubName}) //Check if club name is unique
        .exec()
        .then(club => {
            if(club.length >= 1) {
                return res.status(409).json({
                    message: 'Club name exist'
                });
            } else {
                const club = new Club({
                    _id: new mongoose.Types.ObjectId(),
                    clubId: req.body.clubId,
                    clubName: req.body.clubName,
                    president: req.body.president,
                    vice: req.body.vice,
                    finance: req.body.finance,
                    currPoint: req.body.currPoint,
                    currRank: req.body.currRank,
                    prevRank: req.body.prevRank,
                    staffId: req.body.staffId
                });
                club
                    .save()
                    .then(result => {
                        console.log(result);
                        res.status(200).json({
                            message: 'Created club successfully',
                            createdClub: {
                                clubId: result.clubId,
                                clubName: result.clubName,
                                president: result.president,
                                vice: result.vice,
                                finance: result.finance,
                                currPoint: result.currPoint,
                                currRank: result.currRank,
                                prevRank: result.prevRank,
                                staffId: result.staffId,
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
        })
}

exports.patch_club =  (req, res, next) => {
    const id = req.params.clubId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Club.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Club updated',
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

exports.delete_club = (req, res, next) => {
    const id = req.params.clubId;
    Club.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Club deleted'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}