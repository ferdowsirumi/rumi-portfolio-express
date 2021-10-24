
//Student Name: Ferdowsi Rumi
//Student Number: 301168815
//Date: OCT 1st, 2021
import express,{Router} from 'express'
const router = Router();

/* GET users listing. */
router.get('/', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.send('Placeholder');
});

export default router;