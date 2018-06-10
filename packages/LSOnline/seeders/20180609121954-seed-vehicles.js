'use strict';

const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Vehicles', [{
        model: 'f620',
        fuel: '30',
        fuelType: '1',
        fuelRatio: '30',
        tankCapacity: '80',
        owner: '1',
        primaryColor: '0',
        secondaryColor: '1',
        plate: 'LSO',
        plateType: '1',
        dirtLevel: '10.0',
        dimension: '0',
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Vehicles', null, {});
  }
};