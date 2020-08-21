const viewName = 'real_estate_list_item_view';
const query = `
SELECT a.id, a.thumbnail, a.type, a.deal_type, a.price,
    a.square_space, a.bedrooms, a.bathrooms, a.parking_slots,
    a.city, a.city_area
FROM real_estates a
;
`;

exports.up = function(knex) {
    return knex.schema.raw(`CREATE VIEW ${viewName} AS ${query}`);
};

exports.down = function(knex) {
    return knex.schema.raw(`DROP VIEW ${viewName}`);
};
