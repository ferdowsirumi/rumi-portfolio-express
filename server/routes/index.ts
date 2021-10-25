
//Student Name: Ferdowsi Rumi
//Student Number: 301168815
//Date: OCT 1st, 2021
import express from 'express'
var router = express.Router();

/* GET home page. */
router.get('/', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Ferdowsi Rumi | Hazera'});
});

/* GET home page. */
router.get('/home', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Home'});
});
router.get('/index', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Home'});
});
/* GET About Us page. */
router.get('/about', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('aboutme', { title: 'About Me'});
});
// /* GET Form page. */
// router.get('/login', function(req:express.Request, res:express.Response, next:express.NextFunction) {
//   res.render('login', { title: 'Login'});
// });

/* GET Products page. */
router.get('/projects', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/service', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('service', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('contact', { title: 'Contact'});
});

router.get('/cv', (req:express.Request, res:express.Response, next:express.NextFunction) => {
  res.download('./public/Ferdowsi_Rumi_CV.pdf');
});
/* GET Contact Us page. */
router.get('/p/*', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.sendFile(req.path);
 // res.render('', { title: 'Contact'});
});

export default router;