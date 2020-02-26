const express = require("express");
const router = express.Router();

const FeedModel = require('../models/feed.js');

router.post(
    '/create', //http://www.myapp.com/user/register/
    (req, res) => {
        //The values from the registration form(or Postman)
        const formdata = {
            description: req.body.description,
            image: req.body.image,
            hashtags: req.body.hashtags            
        }
    const newFeedModel = new FeedModel(formdata);
    newFeedModel.save();
    res.send('Feed is created');
});

router.get(
    '/all', //http:www.myapp.com/feed/all
    (req, res) => {
        FeedModel
        .find()
        .then((results)=>{
            res.json(
                { msg: 'here are your feeds', 
                results: results
            }
            );
        })
    }
);

module.exports = router;