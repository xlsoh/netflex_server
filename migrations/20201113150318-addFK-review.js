'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('reviews', {
      fields: ['userId'],
      type: 'foreign Key',
      name: 'fkey_userId',
      references: {
        table: 'users',
        field: 'id',
      },

      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('reviews', 'fkey_userId');
  },
};
