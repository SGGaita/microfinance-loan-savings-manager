const express = require('express');
const router = express.Router();
const {
    database
} = require('../db/db_mysqli');
var multer = require('multer');
var mime = require("mime");

//Get all groups
const getAllUsers = (req, res) => { // Sending Page Query Parameter is mandatory http://localhost:3636/api/products?page=1
    console.log("branch id", branch_id)
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10; // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit; // 0, 10, 20, 30
        endValue = page * limit; // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 100;
    }
    database.table('capep_group as g')
    .join(
        [{
            table: "capep_branch as b",
            on: `g.branch_id_fk = b.branch_id`
        }]
    )
.sort({
            //status: -1,
            group_code: .1
        })
        .getAll()
        .then(grps => {
            if (grps.length > 0) {
                res.status(200).json({
                    count: grps.length,
                    groups: grps
                });
            } else {
                res.json({
                    message: "No groups found"
                });
            }
        })
        .catch(err => console.log(err));
}
