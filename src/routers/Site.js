const express = require('express');
const router = express.Router();
// Use SiteController
const siteController = require('../app/controllers/SiteController');



//Use router 
router.get('/',siteController.index);
router.get('/search',siteController.search);

module.exports = router;