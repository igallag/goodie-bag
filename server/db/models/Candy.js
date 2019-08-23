const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn.bulbagarden.net/upload/0/02/Dream_Rare_Candy_Sprite.png',
  }
});
