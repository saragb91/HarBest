const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const express = require('express');
const logger = require('morgan');
const path = require('path');

const cors = require('cors')


const whitelist = ['http://localhost:3000', "http://localhost:5000", '*']
const corsOptions = {
    origin: (origin, cb) => {
        const originWhitelisted = whitelist.includes(origin)
        cb(null, originWhitelisted)
    }, credentials: true
}

module.exports = app => {

    const app_name = require('../package.json').name;
    const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


    // Middleware Setup
    app.use(logger('dev'));
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());


    app.use(express.static(path.join(__dirname, '/../public')));
    //app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
    app.use(cors(corsOptions))
}