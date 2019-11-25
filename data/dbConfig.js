const knex = require('knex');
const knexConfig = require('../knexfile.js');

module.export = knex(knexConfig.development);