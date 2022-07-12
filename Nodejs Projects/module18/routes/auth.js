const express = require('express');
const { check, body } = require('express-validator/check');  // importing check and body  from express validator

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
  '/login',
  [
    body('email')
      .isEmail()  //validation method
      .withMessage('Please enter a valid email address.') //validation method
      .normalizeEmail(),   //sanitizer
    body('password', 'Password has to be valid.') 
      .isLength({ min: 5 }) //validation method
      .isAlphanumeric()  //validation method
      .trim()  //sanitizer to remove exess whitespace
  ],
  authController.postLogin);

router.post(
  '/signup',
  [
    check('email')     //validation for email
      .isEmail()
      .withMessage('Please enter a valid email.')  //if isEmail is false then this message will be displayed
      .custom((value, { req }) => {     //custom validation
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        
        return User.findOne({ email: value }) 
        .then(userDoc => {
          if (userDoc) {
           return Promise.reject(
             'Email already exists, pick a new one'
           );
          }
        });
      })
      .normalizeEmail(),
    body(       //validation for password
      'password',
      'Please enter a password with only numbers and text and at least 5 characters.' //if isLength or isAlphanumeric is false then this mesage will be displayed
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body('confirmPassword')
    .trim()
    .custom((value, { req }) => {  //validation for confirm password. password should match with confirm password
      if (value !== req.body.password) {
        throw new Error('Passwords have to match!');
      }
      return true;
    })
  ],
  authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
