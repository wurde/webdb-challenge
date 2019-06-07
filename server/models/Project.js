'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Project {
  static async all() {
    return await db_client('projects')
  }

  static async find(id) {
    return db_client('projects').where({ id }).first()
  }

  static async create(project) {
    return await db_client('projects').insert(project)
  }

  static async update(id, project) {
    return db_client('projects')
      .where({ id }).first()
      .update(project)
  }

  static async remove(id) {
    return await db_client('projects')
      .where({ id: id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Project
