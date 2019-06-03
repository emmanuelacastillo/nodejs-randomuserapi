/**
 * Summary. Routing configuration for path '/' of the server.
 *
 * Description. Handles request that comes in for path '/' of the server.
 *
 * @file   routes/index.js
 * @author eman.
 * @since  1.0.0
 */

const express = require('express');


const router = express.Router();

/**
 * Summary. Function call to set up routing to path '/'.
 *
 * Description. This routing specifies the paths where a client
 *              can properly use the API.
 */
router.get('/', function (req, res) {
    res.send({message: 'Please visit /users or /users/firstname/:firstname. Thank you!'});
});

module.exports = router;
