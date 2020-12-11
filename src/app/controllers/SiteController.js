const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    index(req, res, next) {
        // // Callback Function
        // Course.find({}, function (err, courses) {
        //   if (!err) {
        //     res.json(courses);
        //     return;
        //   }
        //   next(err);
        // });

        // Promise
        Course.find({})
            .then((course) => {
                res.render('home', { course: mutipleMongooseToObject(course) });
            })
            .catch(next);

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
