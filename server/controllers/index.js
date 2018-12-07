var models = require('../models');


// Post the user to the chat server.

// Post a message to the node chat server:

module.exports = {
  messages: {
    get: function (req, res) {
      



    }, // a function which handles a get request for all messages
    post: function (req, res) {
      res.writeHead(201);
      req.on('data', (chunk) => {
        data = chunk;
      }).on('end', () => {
        data = data.toString();
        data = JSON.parse(data);
        console.log("controller", data);
        models.messages.post(data);
        res.end();
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      res.writeHead(201);
      req.on('data', (chunk) => {
        data = chunk;
      }).on('end', () => {
        data = data.toString();
        data = JSON.parse(data);
        console.log("controller", data);
        models.users.post(data, (err, data) => {
          if(err) {
            throw err;
          } else {
            res.end(data);
          }
        });
      });
    
    }
  }
};

