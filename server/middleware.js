var bodyParser     = require('body-parser');

module.exports = function(app, express){

  //This section handles the basic middleware
  app.use(bodyParser.json()); // Allows the body to be accessed

  //Serves the public directory to the user
  app.use(express.static(__dirname + '/../public'));

};