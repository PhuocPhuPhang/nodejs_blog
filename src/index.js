const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan'); // HTTP Logger
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const db = require('./config/db');
const SortMiddleware = require('./app/middlewares/sortMiddleware-x');
app.use(methodOverride('_method'));

// Connect to DB
db.connect();

// Custom SortMiddleware
app.use(SortMiddleware);

// Init Router
const router = require('./routers'); // Trỏ đến file index.js trong folder Routers

// Use static files
app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan("combined")); // HTTP Logger

// Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs', // Config extname
        helpers: require('./helpers/handlebars'),
    }),
);
app.set('view engine', 'hbs');

// Path
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('Path: ', path.join(__dirname, 'resources/views'));

// Parse Form Data post
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json()); // Áp dụng cho các dạng Submit Form = ajax, XMLHttpRequest, axios,...

// User Routers
router(app);

// app.post("/search", (req, res) => {
//   console.log(req.body); // body là dữ liệu của Form Data
//   res.send("");
// });

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
