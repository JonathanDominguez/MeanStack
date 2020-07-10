const expreess = require('express');
var router = expreess.Router();
// IMporing schema of blogs
var { Blogs } = require('../models/blogs');
// 
var ObjectId = require('mongoose').Types.ObjectId;
// => localhost:3000/blogs/
//      Gets all post
router.get('/', (req, res) =>{
    Blogs.find((err, docs) =>{
        if(!err) { 
            res.send(docs);
        }
        else{
            console.log('Error in Retrieving all Blogs : ' + JSON.stringify(err, undefined,2));
        }
    });
});
// get by id
router.get('/:id', (req, res) =>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No record with given id   :');
    }
    Blogs.findById(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Retriving Blog : ' + JSON.stringify(err, undefined,2));
        }
    });
});
//      Post data
router.post('/', (req,res)=>{
    var blg = new Blogs({
        title: req.body.title,
        date: req.body.date,
        content: req.body.content
    });
    blg.save((err, doc) => {
        if(!err){
            res.send(doc);
        }
        else{
            console.log('ERROR in Blog save : ' + JSON.stringify(err, undefined,2));
        }
    });
});
// UPDATE
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    }
    var emp = {
        title: req.body.title,
        date: req.body.date,
        content: req.body.content,
    };
    Blogs.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { 
            res.send(doc); 
        }
        else { 
            console.log('Error in Blogs Update :' + JSON.stringify(err, undefined, 2)); 
        }
    });
});
// Delete
router.delete('/:id', (req, res) => {
    // Checking the passing id is valid
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    // Now to delete
    Blogs.findByIdAndRemove(req.params.id, (err, doc) => {
        //
        if (!err) { 
            res.send(doc); 
        }
        else { 
            console.log('Error in Blogs Delete :' + JSON.stringify(err, undefined, 2)); 
        }
    });
});


module.exports = router;

// QUESTION:
// - What is expreess.Router();
// .save
// req.body.title,