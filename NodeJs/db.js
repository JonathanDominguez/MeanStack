// CONNECTION TO MONGODB
const mongoose = require('mongoose');
// Link for connecting to right mongodb collection
const MONGODB_URI = '<DATEBASE>';
// Make connection pass in parrameters of database 
mongoose.connect(MONGODB_URI||'mongodb://localhost:27017/BlogPost', {useNewUrlParser: true, useUnifiedTopology: true},(err) =>{
    // if no error then prints the following
     if (!err){
         console.log('MongoDB connection Succeeded.');
    }
    else{ // Cathces error and prints it out
        console.log('ERROR in DB connection : ' + JSON.stringify(err, undefined,2));
    }
});
// Exporint out this this fucntion 
module.exports = mongoose;

 // QUESTIONS:
 // - What is this useNewUrlParser or useUnifiedTopology
 // - How does JSON.stringify
