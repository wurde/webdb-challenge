'use strict'

/**
 * Dependencies
 */

const express = require('express')
const ActionsController = require('../controllers/ActionsController')
const check_action_exists = require('../middleware/check_action_exists')

/**
 * Define router
 */

const router = express.Router({ mergeParams: true })

/**
 * Routes
 *   GET,POST /projects/:projects_id/actions
 */

router.route('/')
  .get(ActionsController.all)
  .post(ActionsController.create)

/**
 * Middleware
 *   check_action_exists
 */

router.use('/:id', check_action_exists)

/**
 * Routes
 *   GET,PUT,DELETE /projects/:projects_id/actions/:id
 */

router.route('/:id')
  .get(ActionsController.find)
  .put(ActionsController.update)
  .delete(ActionsController.remove)

/**
 * Export router
 */

module.exports = router
