'use strict'

/**
 * Dependencies
 */

const knex = require('knex')
const config = require('../../knexfile')

/**
 * Constants
 */

let client

/**
 * Define db client
 */

if (process.env.NODE_ENV === 'production') {
  client = knex(config.production)
} else {
  client = knex(config.development)
}

/**
 * Export db client
 */

module.exports = client
