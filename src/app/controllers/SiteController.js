const Course = require("../models/Course");
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
      .then((course) => res.json(course))
      .catch(next);

    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
