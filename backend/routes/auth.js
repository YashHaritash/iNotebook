const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User using : POST "/api/auth" Doesn't require auth
router.post(
    '/',
    [
        body('email',"Enter a valid Email").isEmail(),
        body('name',"Enter a valid Name").isLength({ min: 3 }),
        body('password','Password must be atleast 5 characters').isLength({ min: 5 }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        User.create(req.body).then(user => {
            res.json(user);
        }).catch(err=>{console.log(err)
            res.json({error:'Please enter a unique value for email',message:err.message})
        })
        // res.send(req.body);
    }
);

module.exports = router;
