'use strict';

const bcrypt = require('bcrypt');
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User =  sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.addHook('beforeCreate', async function(user) {
    const salt = await bcrypt.genSalt(10); //whatever number you want
    console.log(user);
    user.password = await bcrypt.hash(user.password, salt);
  });
  User.associate = function(models) {
      // define association here
  };
  return User;
};


// 'use strict';
// const {
//   Model
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
  
//   const Event = sequelize.define('Event', {
//     title: DataTypes.STRING,
//     desc: DataTypes.TEXT,
//     imgUrl: DataTypes.TEXT 
//   }, {});
//   Event.associate = function(models) {
//     Event.hasMany(models.Rsvp);
//   };
//   return Event;
// };

// const bcrypt = require('bcrypt')

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var User = sequelize.define('User', {
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: Datatypes.STRING,
//     password: DataTypes.STRING
//   })

//   User.associate = function(models) {
  
//   }

//   return User;
// };