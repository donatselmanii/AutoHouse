const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const app = express();
const port = 8082;

app.use(bodyParser.json());
app.use(cookieParser());

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


app.use('/api/roles', rolesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello, this is a backend API on port:" + port);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
