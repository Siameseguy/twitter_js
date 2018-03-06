const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');


router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', {tweets: tweets});
});


router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    var tweets = tweetBank.find( {name: name});
    console.log(name, "name")
    console.log(tweets)
    res.render( 'index', { tweets: tweets } );
  });


module.exports = router;
