const { Router } = require('express');
const { phoneController } = require('./../controllers');

const phoneRouter = Router();



phoneRouter.post('/',
  phoneController.createPhone);


phoneRouter.get('/', phoneController.getAllPhonesWithCPU);

phoneRouter
  .route('/:phoneId')
  .get(phoneController.getPhoneWithCPU)
  .patch(phoneController.updatePhone)
  .delete(phoneController.removePhone);

module.exports = phoneRouter;