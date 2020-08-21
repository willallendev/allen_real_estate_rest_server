const viewName = 'real_estate_single_view';
const query = `
SELECT a.id, a.thumbnail, a.description, a.type, a.deal_type, a.price,
    a.square_space, a.bedrooms, a.bathrooms, a.parking_slots, a.latitude,
    a.longitude, a.city, a.city_area, a.street_address, a.postal_code,
    a.country_code
FROM real_estates a
;
`;

exports.up = function(knex) {
  return knex.schema.raw(`CREATE VIEW ${viewName} AS ${query}`);
};

exports.down = function(knex) {
  return knex.schema.raw(`DROP VIEW ${viewName}`);
};
