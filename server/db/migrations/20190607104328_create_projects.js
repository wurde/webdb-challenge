'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id')
    table.text('name')
    table.text('description')
    table.datetime('completed_at')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
}
