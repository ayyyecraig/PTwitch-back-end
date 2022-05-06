'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StreamerList extends Model {
    
    static associate(models) {
      // define association here
      StreamerList.belongsTo(models.User, {foreignKey: 'userId'})
      StreamerList.hasMany(models.Streamers, {foreignKey: 'streamersId'})
    }
  }
  StreamerList.init({
   
    userId: {
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references:{
        model: 'user',
        key: 'id'
      }
    },
    streamers: { 
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references:{
        model:'streamers',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'StreamerList',
    tableName: 'streamerLists'
  });
  return StreamerList;

};