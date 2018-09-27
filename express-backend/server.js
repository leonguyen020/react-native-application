var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var account = require('./models/account');
var club = require('./models/club');
var schedule = require('./models/schedule');
var audit = require('./models/audit')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();

app.post('/', function(request, response){
  console.log(request.body.json);      // your JSON
  response.send(request.body.json);    // echo the result back
});

mongoose.connect('mongodb://imhikarucat:12345abcde@ds115283.mlab.com:15283/clubmanagementsystem');

// Middle Route 
router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});

//SERVER SIDE ROUTING
app.use('/', router);

//ACCOUNT CRUD
//Create
router.route('/account').post(function (req, res) {
    console.log("in add");
    var a = new account();
    a.id = req.body.id;
    a.name = req.body.name;
    a.isStaff = req.body.isStaff;
    a.staffID = req.body.staffID;
    a.studentID = req.body.studentID;
    a.clubID = req.body.clubID;
    a.clubRole = req.body.clubRole;
    a.joinDate = req.body.joinDate;
    
    a.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Account Created !' })
    })
});

//Read - Get all
router.route('/accounts').get(function (req, res) {
    account.find(function (err, account) {
        if (err) {
            res.send(err);
        }
        res.send(account);
    });
});

//Read - Get by ID
router.route('/accounts/:account_id').get(function (req, res) {
    account.findById(req.params.account_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

//Update
router.route('/accounts/:account_id').put(function (req, res) {
    account.findById(req.params.account_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.id = req.body.id;
        prod.name = req.body.name;
        prod.isStaff = req.body.isStaff;
        prod.staffID = req.body.staffID;
        prod.studentID = req.body.studentID;
        prod.clubID = req.body.clubID;
        prod.clubRole = req.body.clubRole;
        prod.joinDate = req.body.joinDate;
        prod.save(function (err) {
            if (err)
                res.send(err);
            else{
                res.json(docs);
            }
        });

    });
});

//Delete
router.route('/accounts/:account_id').delete(function (req, res) {
    account.remove({ _id: req.param.account_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
//END OF ACCOUNT

//CLUB CRUD
//Create
router.route('/club').post(function (req, res) {
    console.log("in add");
    var c = new club();
    c.id = req.body.id;
    c.name = req.body.name;
    c.pres = req.body.pres;
    c.vice = req.body.vice;
    c.chief = req.body.chief;
    c.currentPoint = req.body.currentPoint;
    c.currentRank = req.body.currentRank;
    c.prevRank = req.body.prevRank;
    c.staffID = req.body.staffID;
    c.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Club Created !' })
    })
});

//Read - Get all
router.route('/clubs').get(function (req, res) {
    club.find(function (err, club) {
        if (err) {
            res.send(err);
        }
        res.send(club);
    });
});

//Read - Get by ID
router.route('/clubs/:club_id').get(function (req, res) {
    club.findById(req.params.club_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

//Update
router.route('/clubs/:club_id').put(function (req, res) {
    club.findById(req.params.club_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.id = req.body.id;
        prod.name = req.body.name;
        prod.pres = req.body.pres;
        prod.vice = req.body.vice;
        prod.chief = req.body.chief;
        prod.currentPoint = req.body.currentPoint;
        prod.currentRank = req.body.currentRank;
        prod.prevRank = req.body.prevRank;
        prod.staffID = req.body.staffID;
        prod.save(function (err) {
            if (err)
                res.send(err);
            else{
                res.json(docs);
            }
        });

    });
});

//Delete
router.route('/clubs/:club_id').delete(function (req, res) {
    club.remove({ _id: req.param.club_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
//END OF CLUB

//SCHEDULE CRUD
//Create
router.route('/schedule').post(function (req, res) {
    console.log("in add");
    var s = new schedule();
    s.id = req.body.id;
    s.clubID = req.body.clubID;
    s.accountID = req.body.accountID;
    s.time = req.body.time;
    s.type = req.body.type;
    s.eventStartTime = req.body.eventStartTime;
    s.eventEndTime = req.body.eventEndTime;
    s.desc = req.body.desc;
    s.propsalStatus = req.body.propsalStatus;
    s.submitDate = req.body.submitDate;
    s.reportStatus = req.body.reportStatus;
    s.reportDate = req.body.reportDate;
    s.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Schedule Created !' })
    })
});

//Read - Get all
router.route('/schedules').get(function (req, res) {
    schedule.find(function (err, schedule) {
        if (err) {
            res.send(err);
        }
        res.send(schedule);
    });
});

//Read - Get by ID
router.route('/schedules/:schedule_id').get(function (req, res) {
    schedule.findById(req.params.schedule_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

//Update
router.route('/schedules/:schedule_id').put(function (req, res) {
    schedule.findById(req.params.schedule_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.id = req.body.id;
        prod.clubID = req.body.clubID;
        prod.accountID = req.body.accountID;
        prod.time = req.body.time;
        prod.type = req.body.type;
        prod.eventStartTime = req.body.eventStartTime;
        prod.eventEndTime = req.body.eventEndTime;
        prod.desc = req.body.desc;
        prod.propsalStatus = req.body.propsalStatus;
        prod.submitDate = req.body.submitDate;
        prod.reportStatus = req.body.reportStatus;
        prod.reportDate = req.body.reportDate;
        prod.save(function (err) {
            if (err)
                res.send(err);
            else{
                res.json(docs);
            }
        });

    });
});

//Delete
router.route('/schedules/:schedule_id').delete(function (req, res) {
    schedule.remove({ _id: req.param.schedule_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
//END OF SCHEDULE

//AUDIT CRUD
//Create
router.route('/audit').post(function (req, res) {
    console.log("in add");
    var au = new audit();
    au.id = req.body.id;
    au.clubID = req.body.clubID;
    au.accountID = req.body.accountID;
    au.prevLogin = req.body.prevLogin;
    au.prevLogout = req.body.prevLogout;
    au.prevAction = req.body.prevAction;
    au.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Audit log Created !' })
    })
});

//Read - Get all
router.route('/audits').get(function (req, res) {
    audit.find(function (err, audit) {
        if (err) {
            res.send(err);
        }
        res.send(audit);
    });
});

//Read - Get by ID
router.route('/audits/:audit_id').get(function (req, res) {
    audit.findById(req.params.audit_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

//Update
router.route('/audits/:audit_id').put(function (req, res) {
    audit.findById(req.params.audit_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.id = req.body.id;
        prod.clubID = req.body.clubID;
        prod.accountID = req.body.accountID;
        prod.prevLogin = req.body.prevLogin;
        prod.prevLogout = req.body.prevLogout;
        prod.prevAction = req.body.prevAction;
        prod.save(function (err) {
            if (err)
                res.send(err);
            else{
                res.json(docs);
            }
        });

    });
});

//Delete
router.route('/audits/:audit_id').delete(function (req, res) {
    audit.remove({ _id: req.param.audit_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});
//END OF AUDIT

app.use(cors());
app.use('/api', router);
app.listen(port);
console.log('REST API is runnning at ' + port);
