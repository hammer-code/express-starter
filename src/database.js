var Sequelize = require('sequelize');

var sequelize = new Sequelize('blog', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  operatorsAliases: false
});

/**
 * Database models
 */

var Article = sequelize.define('articles', {
  title: Sequelize.STRING,
  body: Sequelize.STRING,
});

module.exports = {
  Article: Article,
};