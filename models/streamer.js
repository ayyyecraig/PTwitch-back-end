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
      // define association here
      Streamer.belongsToMany(models.StreamerList, { foreignKey: 'streamerListId'})
    }
  }
  Streamer.init({
    id: DataTypes.INTEGER,
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
  return streamers;
};