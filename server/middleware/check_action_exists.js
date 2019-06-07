'use strict'

/**
 * Dependencies
 */

const Action = require('../models/Action')

/**
 * Define middleware
 */

async function check_action_exists(req, res, next) {
  if (req.params.projects_id && req.params.id) {
    let action = await Action.find(req.params.projects_id, req.params.id)

    if (!action) {
      return res.status(404).json({ error: { message: `Action not found for ID '${req.params.id}' in Project ID '${req.params.projects_id}'.` }})
    }
  }

  next()
}

/**
 * Export middleware
 */

module.exports = check_action_exists
