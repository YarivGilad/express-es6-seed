import express from 'express';
import logger  from 'morgan';

const router = express.Router();
router.use(logger('dev'))

router.get('/', (req, res) => {

  res.send({message: 'Hello World!!'});
});

export default router;
