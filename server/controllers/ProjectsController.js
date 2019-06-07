'use strict'

/**
 * Dependencies
 */

const Project = require('../models/Project')
const Action = require('../models/Action')

/**
 * Define controller
 */

class ProjectsController {
  static async all(req, res) {
    try {
      const projects = await Project.all()

      res.status(200).json(projects)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async create(req, res) {
    try {
      const [id] = await Project.create(req.body)

      const project = await Project.find(id)

      res.status(201).json(project)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async find(req, res) {
    try {
      const project = await Project.find(req.params.id)

      project.actions = await Action.all(req.params.id)

      res.status(200).json(project)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async update(req, res) {
    try {
      const count = await Project.update(req.params.id, req.body)

      res.status(200).json(count)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async remove(req, res) {
    try {
      const count = await Project.remove(req.params.id)

      res.status(200).json(projects)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }
}

/**
 * Export controller
 */

module.exports = ProjectsController
