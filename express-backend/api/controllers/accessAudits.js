const accessAudit = require('../models/accessAudit');
const mongoose = require('mongoose');

exports.get_all_audit = (req, res, next) => {
    accessAudit.find()
        .select('-__v') //Control which data you want to fetch
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        clubId: doc.clubId,
                        accountId: doc.accountId,
                        prevLogin: doc.prevLogin,
                        prevLogout: doc.prevLogout,
                        prevAction: doc.prevAction,
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

exports.post_audit = (req, res, next) => {
    const accessAudit = new AccessAudit({
        _id: new mongoose.Types.ObjectId(),
        clubId: req.body.clubId,
        accountId: req.body.accountId,
        prevLogin: req.body.prevLogin,
        prevLogout: req.body.prevLogout,
        prevAction: req.body.prevAction,
    });
    accessAudit
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Created access audit successfully',
                createdAudit: {
                    clubId: result.clubId,
                    accountId: result.accountId,
                    prevLogin: result.prevLogin,
                    prevLogout: result.prevLogout,
                    prevAction: result.prevAction,
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
    const id = req.params.accessAuditId;
    AccessAudit.findById(id)
        .select('-__v')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    access_audit: doc,
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