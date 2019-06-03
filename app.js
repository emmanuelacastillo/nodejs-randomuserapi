/**
 * Summary. Starts an express server with the necessary configuration.
 *
 * Description. An express server is started where routing and parsing is configured
 *
 * @file   app.js
 * @author eman.
 * @since  1.0.0
 */

const bodyParser = require('body-parser');
const express = require('express');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const PORT = 3000;

const app = express();

// Configure how the express server is accessed and used.
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(PORT, () =>
    console.log('RandomUserAPI server starting on port ' + PORT),
);
