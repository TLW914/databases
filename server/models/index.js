var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (data) {

    // var {username, message, roomname} = data; //destructuring es6 syntax - revisit
      var username = data.username;
      var message = data.message;
      var roomname = data.roomname;
      console.log("username",username);
      db.connect(function (err, data){
        if (err){
          throw err;
        } else {
          var sql = "INSERT INTO users (Name) VALUES (username)";
          db.query(sql, function (err, result) {
            if (err) {
              throw err;
            } else {
              console.log('SUCCESS');
            }
          });
        }
      });
    } // a function which can be used to insert a message into the database
    // receives data from controller 
    // write to database 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data, callback) {
      var username = data.username;
      console.log("username",username);

    var sql = "INSERT INTO users (Name) VALUES (username)";
    db.query(sql, function (err, result) {
      if (err) {
        throw err;
      } else {
        callback(err, data);
        console.log('SUCCESS');
      }
        });

    }
  }
};
