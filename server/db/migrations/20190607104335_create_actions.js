'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', (table) => {
    table.increments('id')
    table.integer('projects_id').notNullable()
    table.text('description')
    table.text('notes')
    table.datetime('completed_at')
    table.timestamps(true, true)

    table.foreign('projects_id').references('id').inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
}
