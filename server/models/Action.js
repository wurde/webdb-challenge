'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Action {
  static async all() {
    return await db_client('actions')
  }

  static async find(id) {
    return db_client('actions').where({ id }).first()
  }

  static async create(project) {
    return await db_client('actions').insert(project)
  }

  static async update(id, project) {
    return db_client('actions')
      .where({ id }).first()
      .update(project)
  }

  static async remove(id) {
    return await db_client('actions')
      .where({ id: id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Action
