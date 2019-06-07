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
    try {
      let project = await Project.create(req.body)

      res.status(201).json(project)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async find(req, res) {
    try {
      let project = await Project.find(req.params.id)

      res.status(200).json(project)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async update(req, res) {
    try {
      let count = await Project.update(req.params.id, req.body)

      res.status(200).json(count)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' }})
    }
  }

  static async remove(req, res) {
    try {
      let count = await Project.remove(req.params.id)

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
