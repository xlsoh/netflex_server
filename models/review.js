'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    static associate(models) {
      models.review.belongsTo(models.user, {
        onDelete: 'cascade',
        foreignKey: {
          allowNull: false,
        },
      });
      models.review.hasMany(models.likes, {
        foreignKey: 'reviewId',
        onDelete: 'cascade',
      });
    }
  }
  review.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'review',
    }
  );
  return review;
};
