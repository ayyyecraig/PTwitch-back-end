'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StreamerList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StreamerList.belongsTo(models.User, {foreignKey: 'userId'})
      StreamerList.hasMany(models.Streamers, {foreignKey: 'streamersId'})
    }
  }
  StreamerList.init({
    id: DataTypes.INTEGER,
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