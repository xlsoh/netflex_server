"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    static associate(models) {
      models.like.belongsTo(models.user, {
        onDelete: "cascade",
        foreignKey: {
          allowNull: false,
        },
      });
      models.like.belongsTo(models.review, {
        onDelete: "cascade",
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  like.init(
    {
      userId: DataTypes.INTEGER,
      reviewId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "like",
    }
  );
  return like;
};
