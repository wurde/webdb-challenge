'use strict'

/**
 * Dependencies
 */

const Project = require('../models/Project')

/**
 * Define middleware
 */

async function check_project_exists(req, res, next) {
  if (req.params.id) {
    let project = await Project.find(req.params.id)

    if (!project) {
      return res.status(404).json({ error: { message: `Project not found for ID '${req.params.id}'.` }})
    }
  }

  next()
}

/**
 * Export middleware
 */

module.exports = check_project_exists
