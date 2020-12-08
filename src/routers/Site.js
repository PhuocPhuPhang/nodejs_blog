const express = require('express');
const router = express.Router();
// Use SiteController
const siteController = require('../app/controllers/SiteController');

//Use router 
router.use('/search',siteController.search);
router.use('/',siteController.index);

module.exports = router;