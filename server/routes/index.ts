
//Student Name: Ferdowsi Rumi
//Student Number: 301168815
//Date: OCT 1st, 2021
import express from 'express'
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../controllers';
var router = express.Router();



/* GET home page. */
router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);
router.get('/index', DisplayHomePage);
router.get('/rumi', DisplayHomePage);
/* GET About Me page. */
router.get('/about', DisplayAboutPage);

/* GET Products page. */

router.get('/projects', DisplayProjectsPage);
/* GET Services page. */

router.get('/service', DisplayServicesPage);
/* GET Contact page. */
router.get('/contact', DisplayContactPage);

router.get('/cv', (req:express.Request, res:express.Response, next:express.NextFunction) => {
  res.download('./public/Ferdowsi_Rumi_CV.pdf');
});
/* GET Contact Us page. */
router.get('/p/*', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.sendFile(req.path);
});

export default router;