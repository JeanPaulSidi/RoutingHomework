var express = require('express');
var router = express.Router();

var data = [
    { id: 0, name: "Paul", username: "paulsidi" },
    { id: 1, name: "Josil", username: "estimable" },
    { id: 2, name: "Mickael", username: "malick" }
];

//GET /api/person
router.get('/person', function(req, res, next) {
    res.status(200);
    res.send(data);
});

//GET /api/person/:id
router.get('/person/:id', function(req, res, next) {
    let index = data.findIndex(person => person.id == req.params.id);

    if (index >= 0) {
        res.status(200);
        res.send(data[index]);
    } else {
        res.status(404);
        res.json({message: "index not found"});
    }
   // res.status(200);
    //res.send(data.filter(person => {
     //  person.id === req.params.id
    //}));
});

//POST /api/person
router.post('/person', function(req, res, next) {
    // note we are adding any data sent to the endpoint to the array. this really needs some checking.
    res.status(200);
    data.push(req.body);
    res.send(req.body);
});

//PUT /api/person/:id
router.put('/person/:id', function(req, res, next) {
    // note we are adding any data sent to the endpoint to the array. this really needs some checking.
   res.status(200);

   var index = data.indexOf(person => {
     return person.id === req.params.id;
   });

   data[index] = req.body;
   res.send(data[index]);
});

//DELETE /api/person/:id
router.delete('/person/:id', function(req, res, next) {
    res.status(200);
    data[index] = data.filter(person => person.id != req.params.id);
    res.send(data[index]);
 });

 module.exports = router;

