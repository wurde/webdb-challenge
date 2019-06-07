'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Context {
  static async all() {
    return await db_client('contexts')
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
