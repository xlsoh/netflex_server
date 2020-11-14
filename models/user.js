'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      models.user.hasMany(models.review, {
        foreignKey: 'userId',
        onDelete: 'cascade',
      });
      models.user.hasMany(models.likes, {
        foreignKey: 'userId',
        onDelete: 'cascade',
      });
    }
  }
  user.init(
    {
      email: DataTypes.STRING,
      nickName: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'user',
    }
  );
  return user;
};
