'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.streamerList, {foreignKey: 'streamerListId'})
      Users.hasMany(models.comments, {foreignKey:'userId'})
     
    }
  }
  Users.init({
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    emai: DataTypes.STRING,
    password: DataTypes.STRING,
    streamerList: { 
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references:{
        model: 'stremerList',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users'
  });
  return Users;
};