// SCHEMA_TEMPLATE of the data being sent 
const mongoose = require('mongoose');

var Blogs = mongoose.model('Blogs',{
    title: { type: String},
    date: { type: Number},
    content: { type: String}
    // Location: {type: Number}
});

// Exporting out so this can be used
module.exports = { Blogs }; 

// QUESTIONS:
// - What is a schema 
// - mongoose.model
// - why is exporing { Blogs }
//     - is it prehoase it is a whole scheme  