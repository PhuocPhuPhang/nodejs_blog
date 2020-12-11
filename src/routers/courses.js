const express = require('express');
const router = express.Router();
// Use SiteController
const courseController = require('../app/controllers/CourseController');

//Use router
router.get('/:slug', courseController.show);

module.exports = router;
