'use strict'

/**
 * Dependencies
 */

const express = require('express')
const ContextsController = require('../controllers/ContextsController')
const check_context_exists = require('../middleware/check_context_exists')

/**
 * Define router
 */

const router = express.Router({ mergeParams: true })

/**
 * Routes
 *   GET,POST /contexts
 */

router.route('/')
  .get(ContextsController.all)
  .post(ContextsController.create)

/**
 * Middleware
 *   check_context_exists
 */

router.use('/:id', check_context_exists)

/**
 * Routes
 *   GET,PUT,DELETE /contexts/:id
 */

router.route('/:id')
  .get(ContextsController.find)
  .put(ContextsController.update)
  .delete(ContextsController.remove)

/**
 * Export router
 */

module.exports = router
