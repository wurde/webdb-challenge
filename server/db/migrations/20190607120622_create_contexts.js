'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', (table) => {
    table.increments('id')
    table.text('name')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts')
}
