'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('likes', {
      fields: ['reviewId'],
      type: 'foreign Key',
      name: 'likes_fkey_reviewId',
      references: {
        table: 'reviews',
        field: 'id',
      },

      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('likes', 'likes_fkey_reviewId');
  },
};
