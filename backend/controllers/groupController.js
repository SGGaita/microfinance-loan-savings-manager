const express = require('express');
const router = express.Router();
const {
    database
} = require('../db/db_mysqli');
var multer = require('multer');
var mime = require("mime");


//Get all groups
const getAllGroups = (req, res) => { // Sending Page Query Parameter is mandatory http://localhost:3636/api/products?page=1
    let branch_id = req.body.id
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


//Get group by branch
const getGroupById = (req, res) => {
    let branchId = req.params.id;
    database.table('capep_group as g')
        .leftJoin([{
            table: "capep_branch as b",
            on: `g.branch_id_fk = b.branch_id`
        }])
        .filter({
            'b.branch_id': branchId
        })
        .get()
        .then(sup => {
            console.log(sup);
            if (sup) {
                res.status(200).json(sup);
            } else {
                res.json({
                    message: `No supplier found with id ${supplierId}`
                });
            }
        }).catch(err => res.json(err));
}



const addNewGroup = (req, res) => {
    
}



const updateGroup = (req, res) => {
    console.log(req.body)


    database.table('capep_group')
        .filter({
            group_id: req.body.id
        })
        .update({
            status: req.body.status
        }).then(successNum => {
            console.log("rows updated", successNum)
            res.status(200).json(successNum)
        }).catch(err => console.log(err));

}


const updateGroupStatus = (req, res) => {
    console.log(req.body)


    database.table('capep_group')
        .filter({
            group_id: req.body.id
        })
        .update({
            status: req.body.status
        }).then(successNum => {
            console.log("rows updated", successNum)
            res.status(200).json(successNum)
        }).catch(err => console.log(err));

}

//Delete Supplier
const deleteGroup = (req, res) => {
    //console.log("body",req.body)
    //console.log("params", req.params)


    database.table('capep_group')
        .filter({
            group_id: req.params.id
        })
        .remove()
        .then(successNum => {
            res.json({
                success: true
            })
        }).catch(err => res.json({
            success: false,
            errorMsg: err
        }));

}

module.exports = {
    getAllGroups
};