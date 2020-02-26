//1. Import all the necessary npm modules
const express = require('express'); //'express is a varialbe that holds the function require'express'
const app = express(); //turns 'app' into an object
const cors = require('cors');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//2. Import models for db operations
// const UserModel = require('./models/User.js');
// const FeedModel = require('./models/Feed.js');

//Import routes
const UserRoutes = require('./routes/User.js');
const FeedRoutes = require('./routes/feed.js');

app.use(bodyParser.urlencoded({extended: false})); //Using express to user body parser to read the contents of the body
app.use(bodyParser.json());
app.use(cors());

//Connect to our database
const dbUrl = "mongodb+srv://admin:Sep2uzz!@cluster0-fuvbw.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
    dbUrl,
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(
    ()=> {
        console.log('db is connected/response from mongoose');
    }
).catch(
        (e)=> {
            console.log('no response from mongoose', e);
        }
    )

app.use(
        '/user', //http://.myapp.com/user/
        UserRoutes //routes/User.js
)

app.use(
        '/feed',
        FeedRoutes
)

app.get(
    '/home', //without the word 'home' implies http://domainname.com, basically homepage
    (req, res)  => {
        res.send("<h1 style='color:blue'>Welcome Home!<h1>");
    }
);

app.get(
    '*', 
    (req, res)  => {
        res.send("<h1>404</h1>");
    }
);

app.listen(3010, 
    ()=>{
        console.log('You are connected');
    });