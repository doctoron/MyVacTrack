const express = require("express");
const favicon = require('express-favicon');
const app = express();
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Serve up static assets (usually on heroku) Production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
if (process.env.MONGODB_URI) {
  // This executes if being connected in Heroku App
  mongoose.connect(process.env.MONGODB_URI || "mongodb://vcuser:a6.8Bp!.pRacx@ds261486.mlab.com:61486/heroku_prw9cm58");
} else {
  // Connect to the Mongo DB
  mongoose.connect("mongodb://localhost/members", { useNewUrlParser: true });
  mongoose.Promise = global.Promise;

}
app.use(routes);
let db = mongoose.connection;
db.on('error', (err)=> {
  console.log('Mongoose Error: ',err);
});

db.once('open',() =>{
console.log('Mongoose connection successful.');
})

// Build mode
// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});