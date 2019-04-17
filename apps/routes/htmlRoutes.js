const path = require('path');

// this file basically directs which file to show depending on the route
module.exports = app => {
  //this shows to any route that's not described below

  //this shows the tables html when localhost:3000/tables gets hit
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, `../public/survey.html`));
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, `../public/home.html`));
  });
};