var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js')

router.get('/', function(req, res){
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index',{burger_data});
  })
})

router.put('/burgers/update/:id',function(req,res){
  burger.update(req.params.id, function(result){
    console.log(result);
    console.log("hit the put route updating");
    res.redirect('/');
  
  });
});

router.post('/burgers/create',function(req,res){
  burger.create(req.body.burger_name, function(result){
    console.log(result);
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;