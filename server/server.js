const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const session = require('express-session');
const csrfProtection = csrf({ cookie: true });
require('dotenv').config();

const sessionSecret = process.env.SESSION_SECRET;
const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 86400000 },
  })
);

app.use(cors({
  origin: "http://localhost:3000",
  methods: ['POST', 'GET', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
}));

app.use((req, res, next) => {
  res.header('Content-Security-Policy', 'default-src \'self\'');
  res.header('X-Content-Type-Options', 'nosniff');
  next();
});

app.use(csrf({ cookie: true }));
app.use(csrfProtection);
app.use((req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
});


const rolesRoutes = require('./routes/role.routes.js');
const authRoutes = require('./routes/auth.routes.js');
const usersRoutes = require('./routes/user.routes.js');
const makeRoutes = require('./routes/make.routes.js');
const typeRoutes = require('./routes/type.routes.js');
const fuelRoutes = require('./routes/fuel.routes.js');
const questionRoutes = require('./routes/question.routes.js');

app.use('/api/roles', rolesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/make', makeRoutes);
app.use('/api/type', typeRoutes);
app.use('/api/fuel', fuelRoutes);
app.use('/api/question', questionRoutes);

app.get("/", (req, res) => {
  res.send("Hello, this is a backend API on port:" + port);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
