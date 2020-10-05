const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authenticationController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// b) ROUTES - USERS
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
