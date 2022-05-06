'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {
      // define association here
      Users.hasOne(models.streamerList, {foreignKey: 'streamerListId'})
      Users.hasMany(models.comments, {foreignKey:'userId'})
     
    }
  }
  Users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    streamerList: { 
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references:{
        model: 'streamerList',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return Users;
};