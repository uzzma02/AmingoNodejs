const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const UserModel = require('../models/User.js')

router.post(
    '/register', //http://www.myapp.com/user/register/
    (req, res) => {
        //The values from the registration form(or Postman)
        const formdata = {
            'firstname': req.body.firstname,
            'lastname': req.body.lastname,
            'email': req.body.email,
            'password': req.body.password,
            'occupation': req.body.occupation
    }

    //Use formdata to create a model
    const theUserModel = new UserModel(formdata);

    //Step 1. Generate a salt
    bcrypt.genSalt(
        (err, salt)=>{
                //Step 2. Generate the hashed password
                bcrypt.hash(
                    formdata.password,
                    salt,
                    (err, hashedPassword)=>{
                            //Step 3. Replace the password  value in formdata
                            theUserModel.password = hashedPassword;

                            //Step 4. Save to database

                            theUserModel.save();

                            res.send("User registration complete");
                        }

                )
        }
    )
}
)

// router.post(
//     '/login', //http://www.myapp.com/user/login
//     (req, res) => {
//         const email=req.body.email;
//         const password=req.body.password;
//     }
// )
//     //Step 1. Check to see if email exists
//     UserModel
//     .find({email: formdata.email})
//     .then((isMatch)=>{
//         //Step 2.a. If exists, Check password
//         if(isMatch) {
//             res.send('Email found');
//         }
//         else {
//             res.send('Please check email & password');
//         }
//     })

    
//         //Step 3. Compare password with database
//             //Step 4. Generate JWT
//             //Step 5. Send it tothe client
//         //Step 3b. 
//             //Step 6. Exit
//     //Step 2.b. If use doesn't exist, exit

module.exports = router;