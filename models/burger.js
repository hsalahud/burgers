
// const Sequelize = require('sequelize')
// const config = require('../config')

// class Burgers extends Sequelize.Model {}
// Burgers.init({
//   name: {
//     type: Sequelize.STRING,
//     notNull: true
//   },
//   devoured: {
//     type: Sequelize.BOOLEAN,
//     notNull: true
//   }
// }, { sequelize: config, modelName: 'burgers' })
// //NoteL sequelize: points to our connection which we have named config

// module.exports = Burgers


const orm = require('../config/orm.js')

var Burgers = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    create: function(name, cb) {
      orm.create("burgers", [
        "burger_name", "devoured"
      ], [
        name, false
      ], cb);
    },
    update: function(id, cb) {
      var condition = "id=" + id;
      orm.update("burgers", {
        devoured: true
      }, condition, cb);
    }
  };
  

module.exports = Burgers