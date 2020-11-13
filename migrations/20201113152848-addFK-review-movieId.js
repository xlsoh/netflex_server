'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('reviews', {
      fields: ['movieId'],
      type: 'foreign Key',
      name: 'fkey_movieId',
      references: {
        table: 'movies',
        field: 'id',
      },

      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('reviews', 'fkey_movieId');
  },
};
