const http = require("http");
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const mysql = require('mysql');

// Middleware to parse JSON bodies
app.use(express.json());

// Serve the HTML file on GET requests
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'main.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file from disk: ${err}`);
      res.status(500).send('Error loading HTML file');
      return;
    }

    res.status(200).send(data);
  });
});

// Handle POST requests
app.post('/', (req, res) => {
  console.log('POST request received');
  global newObject = req;
  console.log(req.body); // This will log the POST request body
  res.send('POST request handled');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//SQL CONNECTION CONFG
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kalekale",
  database: "mainapp"
});
//DEBUG AND LOG SQL CONNECTION
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});