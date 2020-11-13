'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {
      models.movie.hasMany(models.review, {
        foreignKey: 'movieId',
        onDelete: 'cascade',
      });
    }
  }
  movie.init(
    {
      apiMovieId: DataTypes.INTEGER,
      movieName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'movie',
    }
  );
  return movie;
};
