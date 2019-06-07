'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Context {
  static async all(actions_id) {
    return await db_client.select('c.id', 'c.name')
      .from('contexts AS c')
      .innerJoin('context_actions AS ca', 'c.id', 'ca.contexts_id')
      .where('ca.actions_id', actions_id)
  }

  static async find(id) {
    return db_client('contexts').where({ id }).first()
  }

  static async create(context) {
    return await db_client('contexts').insert(context)
  }

  static async update(id, context) {
    return db_client('contexts')
      .where({ id }).first()
      .update(context)
  }

  static async remove(id) {
    return await db_client('contexts')
      .where({ id: id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Context
