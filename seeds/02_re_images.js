const images = require('../mock/real_estates_interiors');

exports.seed = function(knex) {
  return knex('re_images').del()
    .then(function () {
      return knex('re_images').insert(images);
    });
};
