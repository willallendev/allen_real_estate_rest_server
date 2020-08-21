
exports.up = function(knex) {
    return knex.schema.createTable('real_estates', (table) => {
        table.increments('id').primary();
        table.text('thumbnail');
        table.text('description');
        table.enu('type', ['house', 'apartment', 'farm']);
        table.enu('deal_type', ['for sale', 'for rent']);
        table.integer('price');
        table.integer('square_space');
        table.integer('bedrooms');
        table.integer('bathrooms');
        table.integer('parking_slots');
        table.float('latitude');
        table.float('longitude');
        table.text('street_address');
        table.text('city_area');
        table.text('postal_code');
        table.text('city');
        table.text('state');
        table.text('country');
        table.text('country_code');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('real_estates');
};
