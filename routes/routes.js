var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: "login" });
});

module.exports = router;