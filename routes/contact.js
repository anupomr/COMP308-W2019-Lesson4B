let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
//Create a reference to the db schema
let contact = require('../models/contact');

//Read
router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(contactList);
            res.render('contacts/index', {
                title: 'Contact List',
                contactList: contactList
            });
        }
    });
});

//inserting user input into mLab database
router.post('/', (req, res, next) => {
    //console.log(req.body);
    let newContact = myContact({

        "FirstName": req.body.firstName,
        "LastName": req.body.lastName,
        "Email": req.body.email,
        "Message": req.body.message
    });

    //creating action
    myContact.create(newContact, (err, myContact) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //res.redirect('./views/index');
            res.redirect('/');
        }
    });
});

module.exports = router;


