const { Router } = require('express');
const phoneRouter = require('./routers/phoneRouter');

const router = Router();

router.use('/:cpu', phoneRouter);


module.exports = router;