'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Streamer extends Model {
    static associate(models) {
      // define association here
      Streamer.belongsToMany(models.StreamerList, { 
        as: 'PlayList',
        through: models.streamerList,
        foreignKey: 'streamerListId'})
    }
  }
  Streamer.init({
    name: DataTypes.STRING,
    contentType: DataTypes.STRING,
    schedule: DataTypes.STRING,
    image: DataTypes.STRING,
    streamerListId:{
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references:{
        model: 'streamerList',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Streamer',
    tableName: 'streamers'
  });
  return Streamer;
};