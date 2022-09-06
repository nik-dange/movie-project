require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const reviewRoutes = require('./routes/reviews');


//declare express app
const server = express();


//MIDDLEWARE
//check if theres a request body
server.use(express.json())

//logs each time a route is called
server.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//tells express to use the routes from the review routes folder when the route is in the below form
server.use('/api/reviews', reviewRoutes)

//connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //starts the server
        server.listen(process.env.PORT, () => {
            console.log('Connected to db and server started on port', process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    })
