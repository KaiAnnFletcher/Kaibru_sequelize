const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load input validation
const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")

//Load User model
const User = require("../../models").User
//POST api/users/usersignup
//Register user
//access Public

router.post("/register", (req, res) => {
    //Form validation

    const { errors, isValid } = validateRegisterInput(req.body);

    //Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ where: {email: req.body.email} }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password
            });
    //Hash password before saving to database
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err,hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        });
    });
}
});
});

// POST api/users/userlogin
//Login user and return JWT token
// Public

router.post("/login", (req, res) => {
    //Form validation

    const { errors, isValid } = validateLoginInput(req.body);

//Check validation
if (!isValid) {
    return res.status(400).json(errors);
}
const firstname = req.body.firstname;
const lastname = req.body.lastname;
const email = req.body.email;
const password = req.body.password;

//Find user by username
User.findOne({ email }).then(user => {
    //Check if user exists
    if(!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
    }
//Check Password
bcrypt.compare(password, user.password).then(isMatch => {
    if(isMatch) {
        //User Matched
        // Create JWT Payload
        const payload = {
            id: user.id,
            username: user.username
        };

        //Sign token
        jwt.sign(
            payload,
            keys.secretOrKey,
            {
                expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                })
            }
        );
    } else {
        return res
        .status(400)
        .json({ passwordincorrect: "Password incorrect" });
    }
});
});
});

module.exports = router;