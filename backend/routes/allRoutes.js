const express = require('express');
const router = express.Router();
var multer = require('multer');
var mime = require("mime");
const {database} = require('../db/db_mysqli');

const authenticationController = require('../controllers/authenticationController');
const groupController = require('../controllers/groupController')

/************************************************/
/*                  Table of Contents           */
/************************************************/
/* 

   1. Authentication Endpoints
    a. Register new system User
    b. Login User
/*  
/************************************************/
/*                  Table of Contents           */
/************************************************/

//1. Authentication Endpoints
// Register new Customer account
router.post('/register', authenticationController.addNewUser);
// Login Customer
router.post('/login', authenticationController.loginUser);

//2.Group endpoints
router.get('/groups/', groupController.getAllGroups);


module.exports = router;
