var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ferdowsi Rumi | Hazera'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('aboutme', { title: 'About Me'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

router.get('/cv', (req, res, next) => {
  res.download('./public/Ferdowsi_Rumi_CV.pdf');
});
/* GET Contact Us page. */
router.get('/p/*', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});
module.exports = router;
