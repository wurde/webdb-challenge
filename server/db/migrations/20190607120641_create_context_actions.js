'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('context_actions', (table) => {
    table.increments('id')
    table.integer('contexts_id').notNullable()
    table.integer('actions_id').notNullable()
    table.timestamps(true, true)

    table.unique(['contexts_id', 'actions_id'])
    table.foreign('contexts_id').references('id').inTable('contexts')
      .onDelete('CASCADE').onUpdate('CASCADE')
    table.foreign('actions_id').references('id').inTable('actions')
      .onDelete('CASCADE').onUpdate('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('context_actions')
}
