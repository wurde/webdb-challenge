'use strict'

/**
 * Dependencies
 */

const Project = require('../models/Project')

/**
 * Define controller
 */

class ProjectsController {
  static async all(req, res) {
    try {
      let projects = await Project.all()

      res.status(200).json(projects)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async create(req, res) {
    res.sendStatus(200)
  }

  static async find(req, res) {
    res.sendStatus(200)
  }

  static async update(req, res) {
    res.sendStatus(200)
  }

  static async remove(req, res) {
    res.sendStatus(200)
  }
}

/**
 * Export controller
 */

module.exports = ProjectsController
