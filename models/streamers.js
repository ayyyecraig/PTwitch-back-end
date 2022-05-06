'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Streamer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Streamer.belongsTo(models.Playlist, {foreignKey:'playlistId'})
    }
  }
  streamers.init({
    name: DataTypes.STRING,
    contentType: DataTypes.STRING,
    schedule: DataTypes.STRING,
    img: DataTypes.STRING,
    playlistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Streamer',
    tableName:'streamers'
  });
  return Streamer;
};