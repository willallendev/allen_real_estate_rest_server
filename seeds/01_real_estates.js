const realEstates = require('../mock/london_real_estates');

exports.seed = function(knex) {
  return knex('real_estates').del()
    .then(function () {
      return knex('real_estates').insert(realEstates);
    });
};
