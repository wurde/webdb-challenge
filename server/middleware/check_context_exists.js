'use strict'

/**
 * Dependencies
 */

const Context = require('../models/Context')

/**
 * Define middleware
 */

async function check_context_exists(req, res, next) {
  if (req.params.id) {
    let context = await Context.find(req.params.id)

    if (!context) {
      return res.status(404).json({ error: { message: `Context not found for ID '${req.params.id}'.` }})
    }
  }

  next()
}

/**
 * Export middleware
 */

module.exports = check_context_exists
