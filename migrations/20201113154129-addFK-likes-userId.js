'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('likes', {
      fields: ['userId'],
      type: 'foreign Key',
      name: 'likes_fkey_userId',
      references: {
        table: 'users',
        field: 'id',
      },

      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('likes', 'likes_fkey_userId');
  },
};
