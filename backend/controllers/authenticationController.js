const express = require('express');
const router = express.Router();
var cors = require('cors')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
router.use(cors());
var Sequelize = require('sequelize');
var nodemailer = require('nodemailer')

var moment = require('moment');
var currenttime = new moment().format('YYYY-MM-DD HH:MM:SS');

process.env.SECRET_KEY = 'secret';

//Register new system user
const addNewUser = (req, res, next) => {
    console.log("User body information", req.body)
    var newUser = {
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        roles: req.body.roles,
        status: req.body.status,
        created_at: currenttime
    }

    console.log("New user", )

    User.findOne({
            where: Sequelize.or({
                email: req.body.email
            }, {
                username: req.body.username
            })
        })
        .then(user => {
            if (!user) {
                const hash = bcrypt.hashSync(newUser.password, 10)
                newUser.password = hash;
                User.create(newUser)
                    .then(user => {
                        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                            expiresIn: 3600
                        })
                        res.json({
                            token: token
                        })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                res.json({
                    error: 'User already exists'
                });
            }
        })
        .catch(err => {
            res.send('error: ' + err);
            console.log("error", err)
        })
}

//Login User
const loginUser = (req, res) => {
    User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    reason: 'User Not Found'
                });
            }
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) {
                return res.status(401).send({
                    auth: false,
                    accessToken: null,
                    reason: 'Invalid Password'
                });
            }
            var token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 7200
            });
            res.send({
                token: token
            })
        })
        .catch(err => {
            res.status(500).send('error: ' + err)
        });
}


            module.exports = {
                addNewUser,
                loginUser
            }