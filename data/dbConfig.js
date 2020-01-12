const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(config.development);

module.export = knex(knexConfig.development);