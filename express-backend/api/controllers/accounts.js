const Account = require('../models/account');
const mongoose = require('mongoose');

exports.get_all_account = (req, res, next) => {
    Account.find()
        .select('-__v') //Control which data you want to fetch, exclude the __v
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                club: docs.map(doc => {
                    return {
                        name: doc.name,
                        isStaff: doc.isStaff,
                        staffID: doc.staffID,
                        studentID: doc.studentID,
                        clubID: doc.clubID,
                        clubRole: doc.clubRole,
                        joinDate: doc.joinDate,
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
    const id = req.params.accountId;
    Account.findById(id)
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

exports.post_account = (req, res, next) => {
    const account = new Account({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        isStaff: req.body.isStaff,
        staffID: req.body.staffID,
        studentID: req.body.studentID,
        clubID: req.body.clubID,
        clubRole: req.body.clubRole,
        joinDate: req.body.joinDate,
    });
    account
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Created account successfully',
                createdProduct: {
                    name: result.name,
                    isStaff: result.isStaff,
                    staffID: result.staffID,
                    studentID: result.studentID,
                    clubID: result.clubID,
                    clubRole: result.clubRole,
                    joinDate: result.joinDate,
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

exports.patch_account = (req, res, next) => {
    const id = req.params.accountId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Account.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Account updated',
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

exports.delete_account = (req, res, next) => {
    const id = req.params.accountId;
    Account.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Account deleted'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}