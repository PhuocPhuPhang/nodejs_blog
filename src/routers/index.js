const siteRouter = require('./Site');

function router(app) {
    app.use('/', siteRouter);
    app.use('/search', siteRouter);
}

module.exports = router;
