'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo( models.Users, { foreignKey: 'userId'})

    }
  }
  Comment.init({
 
    userId:{ 
      type:DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references:{ 
        model:'user',
        key: 'id'
      }
    },
    streamerList:{ 
      type:DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'streamerList'
      }
    },
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
  });
  return Comment;
};