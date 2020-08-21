exports.up = function (knex) {
    return knex.schema.createTable('re_images', (table) => {
        table.integer('id');
        table.text('url');

        table.primary(['id', 'url']);
        table.foreign('id').references('id').inTable('real_estates');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('re_images');
};
