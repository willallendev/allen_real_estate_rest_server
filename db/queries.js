const knex = require('./knex'); // the connection instanceasync function getTotalRows(table) {    const count = (await knex(table).count().first()).count;    return parseInt(count);}module.exports = {    async getAll(limit, offset) {        const table = 'real_estate_list_item_view';        const total = await getTotalRows(table);        const data = await knex(table)            .limit(limit || 10)            .offset(offset || 0);        return ({data, total});    },    async getAllByQuery(query, limit, offset) {        const table = 'real_estate_list_item_view';        let total = (await knex(table)            .whereRaw(`                city_area LIKE '%${query}%' OR                deal_type LIKE '%${query}%' OR                type LIKE '%${query}%'            `)            .count()            .first()).count;        total = parseInt(total);        const data = await knex(table)            .whereRaw(`                city_area LIKE :query OR                city LIKE :query OR                deal_type LIKE :query OR                type LIKE :query            `, {query: `%${query.toLowerCase()}%`})            .orderBy('city_area', "asc")            .offset(offset)            .limit(limit);        return ({data, total});    },    async getOne(id) {        const realEstate = await knex('real_estate_single_view')            .where('id', id)            .first();        if (!realEstate) {            return realEstate;        }        const imagesRaw = await knex('re_images')            .select('url')            .where('id', id);        return ({            ...realEstate,            images: (imagesRaw.length && imagesRaw.map(elem => elem.url)) || [],        });    }};