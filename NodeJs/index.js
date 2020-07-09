// CREATING A LOCAL HOST TO BE ABLE TO INTERCTE 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var blogsController = require('./controllers/blogsController.js');

// calling to use express functions
var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('server started at port : 3000'));

app.use('/blogs', blogsController);

// QUESTIONS:
// - What is .use ik it may be apart of the function of expresss