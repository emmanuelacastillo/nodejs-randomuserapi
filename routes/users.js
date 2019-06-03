/**
 * Summary. Routing configuration for path '/users' of the server.
 *
 * Description. Handles request that comes in for path '/users' of the server.
 *
 * @file   routes/users.js
 * @author eman.
 * @since  1.0.0
 */

const axios = require('axios');
const express = require('express');
const UserData = require('../model/userdata');
const UserDB = require('../db/userdb');
const handleError = require('../utils/error');


// Constants used throughout the routing endpoints.
const RANDOM_USER_ME_API = 'https://randomuser.me/api';
const RANDOM_USER_ME_API_CALL_COUNT = 10;
const USER_DB = new UserDB();

/**
 * @function    requestRandomUser
 *
 * Summary. Function to access data from a Random User ME API.
 *
 * Description. This function is used so that a specified number
 *              of asynchronous calls can occur on this function
 *              through a promise object.
 *
 * @since      1.0.0
 * @access     private
 *
 * @param {function}   resolve        Function used to return a successful Promise.
 * @param {function}   reject         Function used to return an unsuccessful Promise.
 *
 * @return {Promise} The results of an asynchronus call to the Random User ME API.
 */
const requestRandomUser = (resolve, reject) => {
    axios.get(RANDOM_USER_ME_API)
        // Saves results to user database
        .then((response) => {
            const results = response.data.results[0];
            const user = new UserData(results.gender, results.name.first,
                results.location.city, results.email, results.cell);
            USER_DB.addUser(user);
            resolve();
        })
        .catch((error) => {
            reject(error);
        });
}

const userRouter = express.Router();

/**
 * Summary. Function call to set up GET routing to path '/users/'.
 *
 * Description. This routing grabs RANDOM_USER_ME_API_CALL_COUNT
 *              data from the Random User ME API and sets it in
 *              the USER_DB. Lastly, it returns all data in USER_DB
 *              as a response to the client.
 */
userRouter.get('/', (req, res) => {
    // Sets up an array of promises to make calls to the Random User ME API.
    const randomUserApiCallArray = Array(RANDOM_USER_ME_API_CALL_COUNT)
    for (let i = 0; i < RANDOM_USER_ME_API_CALL_COUNT; i++) {
        randomUserApiCallArray[i] = new Promise(requestRandomUser);
    }

    Promise.all(randomUserApiCallArray)
        .then(() => {
            res.status(200);
            res.send(USER_DB.getAllUsers());
        })
        .catch((error) => {
            handleError(error);
            res.status(424);
            res.send({message: 'Error generating random users!'});
        });
});

/**
 * Summary. Function call to set up POST routing to path '/users/'.
 *
 * Description. This routing puts the request body's data into USER_DB.
 */
userRouter.post('/', (req, res) => {
    USER_DB.addUser(req.body)
    res.status(201);
    res.send({message: 'User successfully created!'})
});

/**
 * Summary. Function call to set up POST routing to path '/users/firstname/:firstname'.
 *
 * Description. This routing provides the ability for a client to obtain a particular user data.
 */
userRouter.get('/firstname/:firstname', (req, res) => {
    const data = USER_DB.getUser(req.params.firstname);
    if (data) {
        res.status(200);
        res.send(data)
    } else {
        res.status(404);
        res.send({message: 'User not found!'});
    }
});

module.exports = userRouter;
