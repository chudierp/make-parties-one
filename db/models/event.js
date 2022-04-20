'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    imgUrl: DataTypes.TEXT 
  }, {});
  Event.associate = function(models) {
    Event.hasMany(models.Rsvp);
  };
  return Event;
};
