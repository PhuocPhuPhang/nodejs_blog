const express = require('express');
const router = express.Router();
// Use SiteController
const meController = require('../app/controllers/MeController');

//Use router
router.get('/stored/courses', meController.storedCourses);

module.exports = router;
