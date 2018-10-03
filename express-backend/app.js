const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/users');
const clubRoutes = require('./api/routes/clubs');
const scheduleRoutes = require('./api/routes/schedules');
const accountRoutes = require('./api/routes/accounts');
const accessAuditRoutes = require('./api/routes/accessAudits');

mongoose.connect('mongodb://imhikarucat:12345abcde@ds117773.mlab.com:17773/cms', {
    useCreateIndex: true,
    useNewUrlParser: true
})
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Controll-Allow-Origin', '*');
    res.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Controll-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/users', userRoutes);
app.use('/clubs', clubRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/accounts', accountRoutes);
app.use('/accessAudits', accessAuditRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;