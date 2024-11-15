const express = require('express');
const path = require('path');

const app = express();
const port = 3001;  // Adjusted port number

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Render the navbar page (Homepage)
app.get('/', (req, res) => {
  res.render('navbar'); // Render navbar.ejs as the main page
});

// Routes for the different pages
app.get('/about', (req, res) => {
  res.render('about'); // Render about.ejs
});

app.get('/achievements', (req, res) => {
  res.render('achievements'); // Render achievements.ejs
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard'); // Render dashboard.ejs
});

app.get('/erp', (req, res) => {
  res.render('ERP'); // Render ERP.ejs
});

app.get('/techstack', (req, res) => {
  res.render('techstack'); // Render techstack.ejs
});

app.get('/sharedlogic', (req, res) => {
  res.render('sharedlogic');
});

app.get('/timeline', (req, res) => {
  res.render('timeline');
});


// Start the server on port 3001
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${3001}`);
});
